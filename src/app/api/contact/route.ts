import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 설정
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const hospital = formData.get('hospital') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const products = formData.get('products') as string;

    // 첨부파일 처리 (여러 개 대응)
    const attachments: any[] = [];
    const files = formData.getAll('file') as File[];
    
    for (const file of files) {
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // [1] Supabase DB에 데이터 저장 (텍스트 및 파일 개수)
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([
        {
          hospital,
          name,
          email,
          phone,
          subject,
          message,
          products,
          file_count: attachments.length // 파일 개수만 저장
        }
      ]);

    if (dbError) {
      console.error('Database save error:', dbError);
      // DB 저장이 실패해도 메일은 보내도록 진행하거나, 에러를 반환할 수 있습니다.
      // 여기서는 기록이 중요하므로 에러가 나면 알리도록 하겠습니다.
      throw new Error(`DB 저장 실패: ${dbError.message}`);
    }

    // [2] 메일 발송 설정
    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 465,
      secure: true, // SSL 사용
      auth: {
        user: process.env.NAVER_USER,
        pass: process.env.NAVER_PASSWORD,
      },
    });

    // 메일 내용 구성 (HTML 형식)
    const mailOptions: any = {
      from: `청안 메디컬 <${process.env.NAVER_USER}@naver.com>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `[홈페이지 문의] ${subject} - ${name}님`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px;">
          <h2 style="color: #00B3E4; border-bottom: 2px solid #00B3E4; padding-bottom: 10px;">새로운 문의가 접수되었습니다</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">병원/회사명</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${hospital}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">성함</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">이메일</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">연락처</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">관심제품</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${products || '없음'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">제목</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">첨부파일</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${attachments.length}개</td>
            </tr>
          </table>
          <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <p style="font-weight: bold; margin-bottom: 10px;">문의 내용:</p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">* 이 메일은 홈페이지 문의 폼을 통해 자동 발송되었으며, DB에도 기록되었습니다.</p>
        </div>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Failed to handle contact request', error: error.message },
      { status: 500 }
    );
  }
}

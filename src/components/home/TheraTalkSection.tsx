'use client';

import { motion } from 'framer-motion';

const TheraTalkSection = () => {
    return (
        <section className="relative py-28 bg-sky-50 overflow-hidden border-t border-sky-100">
            {/* 배경 데코레이션 */}
            <div className="absolute inset-0 bg-tech-dots opacity-30 mix-blend-multiply pointer-events-none" />


            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                {/* 상단 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                        Consulting Solution
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight text-slate-900">
                        TheraTalk <span className="text-primary">Solution</span>
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto mb-8" />
                </motion.div>

                {/* (1) Pain Points Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                            병원의 현실적인 고민 <br className="md:hidden" /> (Pain Points)
                        </h3>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: '반복되는 소모전', desc: '"진료 시간, 위치, 가격..." 매일 같은 답변에 지친 직원들' },
                            { title: '끊임없는 교육', desc: '인력 교체 때마다 반복되는 상담 교육과 매뉴얼 전달의 한계' },
                            { title: '분산된 채널', desc: '카톡, 톡톡, DM... 여기저기서 울리는 알림에 정작 중요한 응대는 뒷전' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 border-sky-100 bg-white/90 hover:border-red-500/20 transition-all duration-500 group"
                            >
                                <div className="text-red-500/40 font-black text-3xl mb-4 group-hover:text-red-500 transition-colors">0{idx + 1}</div>
                                <h4 className="text-slate-900 font-bold text-lg mb-3">{item.title}</h4>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* (2) Solution Main Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative mb-32 p-1 md:p-1.5 rounded-2xl bg-gradient-to-br from-primary/20 via-sky-100 to-transparent"
                >
                    <div className="bg-white rounded-2xl p-8 md:p-16 relative overflow-hidden border border-sky-100">
                        {/* 장식용 글로우 */}


                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-relaxed break-keep">
                                "상담의 누락은 곧 환자의 이탈입니다.<br />
                                테라톡은 단순한 알림톡을 넘어 <span className="text-primary">상담의 전 과정</span>을<br />
                                데이터화하는 <span className="text-primary">통합 솔루션</span>입니다."
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                                {[
                                    { title: 'AI 자동응답으로 해결', desc: '자주 묻는 질문은 AI가 24시간 대신 답변하여, 직원의 업무 부하를 획기적으로 줄여줍니다.' },
                                    { title: '매뉴얼 없는 답변 적응', desc: '상담 스크립트와 히스토리가 자동으로 정리되어, 신규 직원도 투입 즉시 숙련된 상담이 가능합니다.' },
                                    { title: '채널을 한 곳에서 통합 관리', desc: '흩어진 모든 상담 창구를 단 하나의 대시보드로 통합하여 누락 없는 빠른 응대를 실현합니다.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                            </div>
                                            <h4 className="text-slate-900 font-bold text-base md:text-lg">{item.title}</h4>
                                        </div>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep pl-11">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* (3) Benefits Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            기대 효과 (Benefits)
                        </h3>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: '병원 맞춤형 워크플로우',
                                desc: '의료 현장의 특수성을 반영하여, 접수부터 사후 관리까지 물 흐르듯 연결되는 시스템을 제공합니다.'
                            },
                            {
                                title: '성공적인 환자 유치',
                                desc: '빠르고 정확한 응대는 환자의 신뢰로 이어지며, 병원의 브랜드 가치를 완성하는 마지막 퍼즐이 됩니다.'
                            },
                            {
                                title: '쉬운 도입, 강력한 효과',
                                desc: '복잡한 연동 과정 없이 우리 병원의 기존 시스템에 즉시 녹아듭니다.'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="p-8 h-full border border-sky-100 bg-white hover:bg-sky-50 hover:border-primary/30 transition-all duration-500 rounded-xl flex flex-col justify-between">
                                    <h4 className="text-slate-900 font-bold text-lg md:text-xl mb-4 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheraTalkSection;

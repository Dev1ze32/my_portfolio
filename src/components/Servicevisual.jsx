import { useReveal } from '../hooks/useReveal';

/**
 * ServiceVisual
 * Decorative inline-SVG diagram for a Services tile. Picks a small
 * illustration based on `tag`. Purely presentational: aria-hidden,
 * pointer-events-none, no interactive semantics.
 *
 * <ServiceVisual tag={tile.tag} onDark={false} className="" />
 */

// ---- shared stroke/label helpers -------------------------------------

function palette(onDark) {
    return {
        rule: onDark ? 'var(--color-graphite-rule)' : 'var(--color-rule)',
        rule2: onDark ? 'var(--color-graphite-rule)' : 'var(--color-rule-2)',
        muted: onDark ? 'var(--color-graphite-ink-muted)' : 'var(--color-ink-muted)',
        faint: onDark ? 'var(--color-graphite-ink-muted)' : 'var(--color-ink-faint)',
        accent: 'var(--color-accent)',
    };
}

const monoLabel = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.02em',
};

// ---- CORE OFFER --------------------------------------------------------
// alt: tangled tabs (Sheet1 / Sheet1_final / Sheet1_final_v2) collapsing
// into one clean, labeled system.
function CoreOfferDiagram({ c }) {
    return (
        <>
            {/* tangled tabs, left */}
            <g className="sv-line sv-d1" fill="none" stroke={c.rule2}>
                <rect x="8" y="20" width="58" height="15" rx="2" transform="rotate(-6 37 27.5)" />
                <rect x="14" y="42" width="62" height="15" rx="2" transform="rotate(4 45 49.5)" />
                <rect x="10" y="64" width="64" height="15" rx="2" transform="rotate(-3 42 71.5)" />
            </g>
            <g className="sv-line sv-d1" fill="none" stroke={c.faint} strokeDasharray="1 3">
                <path d="M40 35 Q 55 45, 45 49" />
                <path d="M50 57 Q 60 60, 42 71" />
            </g>
            <text x="14" y="30.5" fontSize="7.5" fill={c.muted} style={monoLabel}>Sheet1</text>
            <text x="20" y="52.5" fontSize="7.5" fill={c.muted} style={monoLabel}>Sheet1_final</text>
            <text x="16" y="74.5" fontSize="7" fill={c.muted} style={monoLabel}>Sheet1_final_v2</text>

            {/* arrow */}
            <g className="sv-line sv-d2" stroke={c.accent} fill="none">
                <path d="M92 60 H132" />
                <path d="M126 54 L132 60 L126 66" />
            </g>

            {/* clean system, right */}
            <g className="sv-line sv-d3" fill="none" stroke={c.rule}>
                <rect x="150" y="18" width="82" height="78" rx="4" />
            </g>
            <rect className="sv-d3" x="150" y="18" width="82" height="16" rx="4" fill={c.accent} opacity="0.9" />
            <text x="158" y="29.5" fontSize="7.5" fill="var(--color-accent-ink)" style={monoLabel}>SYSTEM</text>
            <g className="sv-line sv-d3" fill="none" stroke={c.rule2}>
                <rect x="157" y="42" width="32" height="46" rx="2" />
                <rect x="193" y="42" width="32" height="46" rx="2" />
            </g>
            <g stroke={c.faint} className="sv-d3">
                <line x1="162" y1="52" x2="184" y2="52" />
                <line x1="162" y1="60" x2="184" y2="60" />
                <line x1="162" y1="68" x2="180" y2="68" />
                <line x1="198" y1="52" x2="220" y2="52" />
                <line x1="198" y1="60" x2="220" y2="60" />
                <line x1="198" y1="68" x2="216" y2="68" />
            </g>
        </>
    );
}

// ---- API DEVELOPMENT ----------------------------------------------------
// alt: three stacked endpoints, each with a status pill.
function ApiDiagram({ c }) {
    const rows = [
        { y: 16, method: 'GET', path: '/orders', status: '200' },
        { y: 50, method: 'POST', path: '/invoices', status: '201' },
        { y: 84, method: 'GET', path: '/stock/:id', status: '200' },
    ];
    return (
        <>
            <path
                className="sv-line sv-d1"
                d="M10 22 H4 V108 H10"
                fill="none"
                stroke={c.faint}
                strokeDasharray="1 3"
            />
            {rows.map((row, i) => (
                <g key={row.path}>
                    <rect
                        className={`sv-line sv-d${i + 1}`}
                        x="20"
                        y={row.y}
                        width="176"
                        height="26"
                        rx="4"
                        fill="none"
                        stroke={c.rule}
                    />
                    <text x="30" y={row.y + 16.5} fontSize="8" fill={c.accent} style={monoLabel}>
                        {row.method}
                    </text>
                    <text x={row.method === 'POST' ? 58 : 52} y={row.y + 16.5} fontSize="8" fill={c.muted} style={monoLabel}>
                        {row.path}
                    </text>
                    <circle
                        cx="208"
                        cy={row.y + 13}
                        r="4"
                        fill={c.accent}
                        className={i === 0 ? 'sv-dot-pulse' : ''}
                        opacity={i === 0 ? 1 : 0.55}
                    />
                    <text x="196" y={row.y - 3} fontSize="7" fill={c.faint} style={monoLabel} textAnchor="end">
                        {row.status}
                    </text>
                </g>
            ))}
        </>
    );
}

// ---- DEVOPS --------------------------------------------------------------
// alt: pipeline build → image → deploy → live, accent checkmark on last.
function DevOpsDiagram({ c }) {
    const nodes = [
        { x: 6, label: 'build' },
        { x: 66, label: 'image' },
        { x: 126, label: 'deploy' },
        { x: 186, label: 'live' },
    ];
    return (
        <>
            {nodes.map((n, i) => {
                const last = i === nodes.length - 1;
                return (
                    <g key={n.label}>
                        <rect
                            className={`sv-line sv-d${Math.min(i + 1, 3)}`}
                            x={n.x}
                            y="46"
                            width="46"
                            height="30"
                            rx="4"
                            fill="none"
                            stroke={last ? c.accent : c.rule}
                            strokeWidth={last ? 1.4 : 1}
                        />
                        <text
                            x={n.x + 23}
                            y="65"
                            fontSize="7.5"
                            fill={last ? c.accent : c.muted}
                            textAnchor="middle"
                            style={monoLabel}
                        >
                            {n.label}
                        </text>
                        {last && (
                            <path
                                className="sv-line sv-d3"
                                d="M204 40 L207 44 L213 35"
                                fill="none"
                                stroke={c.accent}
                                strokeWidth="1.4"
                            />
                        )}
                    </g>
                );
            })}
            {nodes.slice(0, -1).map((n, i) => (
                <g key={`arrow-${n.label}`} className={`sv-line sv-d${Math.min(i + 1, 3)}`} stroke={c.rule} fill="none">
                    <path d={`M${n.x + 46} 61 H${n.x + 60}`} />
                    <path d={`M${n.x + 55} 57 L${n.x + 60} 61 L${n.x + 55} 65`} />
                </g>
            ))}
            <circle cx="220" cy="34" r="3" fill={c.accent} className="sv-dot-pulse" />
            <text x="150" y="94" fontSize="7" fill={c.faint} style={monoLabel} textAnchor="middle">
                nginx · docker · ubuntu 22.04
            </text>
        </>
    );
}

// ---- AUTOMATION -----------------------------------------------------------
// alt: sheet grid → gear → envelope/bell.
function AutomationDiagram({ c }) {
    return (
        <>
            {/* sheet grid */}
            <g className="sv-line sv-d1" fill="none" stroke={c.rule}>
                <rect x="12" y="34" width="54" height="54" rx="2" />
                <line x1="12" y1="52" x2="66" y2="52" />
                <line x1="12" y1="70" x2="66" y2="70" />
                <line x1="30" y1="34" x2="30" y2="88" />
                <line x1="48" y1="34" x2="48" y2="88" />
            </g>
            <text x="12" y="30" fontSize="7" fill={c.muted} style={monoLabel}>sheet.xlsx</text>

            {/* arrow to gear */}
            <g className="sv-line sv-d2" stroke={c.accent} fill="none">
                <path d="M72 60 H92" />
                <path d="M86 55 L92 60 L86 65" />
            </g>

            {/* gear */}
            <g className="sv-line sv-d2" fill="none" stroke={c.rule2}>
                <circle cx="118" cy="60" r="17" />
                <circle cx="118" cy="60" r="6" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <line
                        key={deg}
                        x1={118 + 17 * Math.cos((deg * Math.PI) / 180)}
                        y1={60 + 17 * Math.sin((deg * Math.PI) / 180)}
                        x2={118 + 22 * Math.cos((deg * Math.PI) / 180)}
                        y2={60 + 22 * Math.sin((deg * Math.PI) / 180)}
                    />
                ))}
            </g>

            {/* arrow to envelope */}
            <g className="sv-line sv-d3" stroke={c.accent} fill="none">
                <path d="M144 60 H164" />
                <path d="M158 55 L164 60 L158 65" />
            </g>

            {/* envelope */}
            <g className="sv-line sv-d3" fill="none" stroke={c.rule}>
                <rect x="170" y="46" width="56" height="34" rx="3" />
                <path d="M170 48 L198 68 L226 48" />
            </g>
            <text x="198" y="92" fontSize="7" fill={c.faint} style={monoLabel} textAnchor="middle">notify</text>
        </>
    );
}

// ---- AI / LLM ---------------------------------------------------------------
// alt: question bubble → retriever chip → doc chips → answer bubble.
function AiDiagram({ c }) {
    return (
        <>
            {/* question bubble */}
            <g className="sv-line sv-d1" fill="none" stroke={c.rule}>
                <path d="M8 20 h44 a4 4 0 0 1 4 4 v18 a4 4 0 0 1 -4 4 h-30 l-8 8 v-8 h-6 a4 4 0 0 1 -4 -4 v-18 a4 4 0 0 1 4 -4 z" />
            </g>
            <text x="16" y="34" fontSize="7" fill={c.muted} style={monoLabel}>what&apos;s our</text>
            <text x="16" y="43" fontSize="7" fill={c.muted} style={monoLabel}>stock level?</text>

            {/* dashed wire to retriever */}
            <path className="sv-line sv-d1" d="M60 40 Q 78 40, 88 46" fill="none" stroke={c.faint} strokeDasharray="1 3" />

            {/* retriever chip */}
            <rect className="sv-line sv-d2" x="90" y="40" width="46" height="18" rx="9" fill="none" stroke={c.accent} />
            <text x="113" y="52" fontSize="6.5" fill={c.accent} style={monoLabel} textAnchor="middle">RETRIEVER</text>

            {/* doc chips (embedding stack) */}
            <g className="sv-line sv-d2" fill="none" stroke={c.rule2}>
                <rect x="148" y="18" width="30" height="20" rx="2" />
                <rect x="152" y="22" width="30" height="20" rx="2" />
            </g>
            <rect className="sv-line sv-d2" x="156" y="26" width="30" height="20" rx="2" fill="none" stroke={c.accent} />

            {/* dashed wire to answer */}
            <path className="sv-line sv-d2" d="M136 49 Q 155 49, 165 46" fill="none" stroke={c.faint} strokeDasharray="1 3" />
            <path className="sv-line sv-d3" d="M136 49 Q 155 70, 175 78" fill="none" stroke={c.faint} strokeDasharray="1 3" />

            {/* answer card */}
            <rect className="sv-line sv-d3" x="176" y="66" width="56" height="38" rx="3" fill="none" stroke={c.rule} />
            <g stroke={c.faint} className="sv-d3">
                <line x1="182" y1="76" x2="222" y2="76" />
                <line x1="182" y1="84" x2="222" y2="84" />
                <line x1="182" y1="92" x2="210" y2="92" />
            </g>
        </>
    );
}

// ---- BOTS -----------------------------------------------------------------
// alt: phone silhouette with platform monogram chips + a command line.
function BotsDiagram({ c }) {
    const monograms = [
        { label: 'D', x: 92 },
        { label: 'V', x: 116 },
        { label: 'T', x: 140 },
    ];
    return (
        <>
            <rect
                className="sv-line sv-d1"
                x="76"
                y="6"
                width="88"
                height="108"
                rx="14"
                fill="none"
                stroke={c.rule}
            />
            <line className="sv-line sv-d1" x1="108" y1="14" x2="132" y2="14" stroke={c.faint} strokeWidth="2" />

            <g className="sv-line sv-d2" fill="none" stroke={c.rule2}>
                {monograms.map((m) => (
                    <circle key={m.label} cx={m.x} cy="34" r="10" />
                ))}
            </g>
            {monograms.map((m, i) => (
                <text
                    key={m.label}
                    x={m.x}
                    y="37"
                    fontSize="8"
                    fill={i === 1 ? c.accent : c.muted}
                    textAnchor="middle"
                    style={monoLabel}
                >
                    {m.label}
                </text>
            ))}

            <g className="sv-line sv-d3" fill="none" stroke={c.rule}>
                <rect x="86" y="56" width="68" height="46" rx="3" />
            </g>
            <text x="92" y="70" fontSize="7" fill={c.faint} style={monoLabel}>
                &gt; /stock SKU-204
            </text>
            <text x="92" y="84" fontSize="7.5" fill={c.accent} style={monoLabel}>
                142 on hand
            </text>
        </>
    );
}

const DIAGRAMS = {
    'CORE OFFER': CoreOfferDiagram,
    'API DEVELOPMENT': ApiDiagram,
    DEVOPS: DevOpsDiagram,
    AUTOMATION: AutomationDiagram,
    'AI / LLM': AiDiagram,
    BOTS: BotsDiagram,
};

export default function ServiceVisual({ tag, onDark = false, className = '' }) {
    const ref = useReveal();
    const Diagram = DIAGRAMS[tag] || ApiDiagram;
    const c = palette(onDark);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className={`sv-wrap pointer-events-none${onDark ? ' sv-wrap--dark' : ''}${className ? ` ${className}` : ''}`}
        >
            <svg viewBox="0 0 240 120" className="sv-svg" xmlns="http://www.w3.org/2000/svg">
                <Diagram c={c} />
            </svg>
        </div>
    );
}
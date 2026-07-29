export type Product = {
  slug: string;
  name: string;
  family: 'Crushing' | 'Mobile' | 'Grinding' | 'Process';
  tag: string;
  description: string;
  capacity: string;
  image: string;
};

const quarry = 'https://images.unsplash.com/photo-1566408669364-4d25a24a3e77?auto=format&fit=crop&w=1200&q=80';
const machinery = 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80';
const mine = 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1200&q=80';
const plant = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80';

export const products: Product[] = [
  { slug: 'c6x-jaw-crusher', name: 'C6X Jaw Crusher', family: 'Crushing', tag: 'Primary crushing', description: 'A high-efficiency jaw solution for demanding hard-rock applications.', capacity: 'Up to 1,200 t/h', image: machinery },
  { slug: 'c5x-jaw-crusher', name: 'C5X Jaw Crusher', family: 'Crushing', tag: 'Primary crushing', description: 'Robust crushing performance with a modern, service-friendly frame.', capacity: 'Up to 1,500 t/h', image: quarry },
  { slug: 'pew-jaw-crusher', name: 'PEW Jaw Crusher', family: 'Crushing', tag: 'Primary crushing', description: 'European-style jaw crusher for reliable quarry and mining duty.', capacity: 'Up to 650 t/h', image: mine },
  { slug: 'pe-jaw-crusher', name: 'PE Jaw Crusher', family: 'Crushing', tag: 'Primary crushing', description: 'A proven workhorse for coarse crushing in aggregate production.', capacity: 'Up to 1,000 t/h', image: plant },
  { slug: 'hpt-cone-crusher', name: 'HPT Cone Crusher', family: 'Crushing', tag: 'Secondary crushing', description: 'Multi-cylinder hydraulic cone crusher for precision and throughput.', capacity: 'Up to 1,200 t/h', image: quarry },
  { slug: 'hst-cone-crusher', name: 'HST Cone Crusher', family: 'Crushing', tag: 'Secondary crushing', description: 'Single-cylinder hydraulic cone crusher designed for continuous duty.', capacity: 'Up to 1,200 t/h', image: machinery },
  { slug: 's-cone-crusher', name: 'S Cone Crusher', family: 'Crushing', tag: 'Secondary crushing', description: 'Versatile cone crusher for fine and medium aggregate reduction.', capacity: 'Up to 750 t/h', image: mine },
  { slug: 'roller-crusher', name: 'Roller Crusher', family: 'Crushing', tag: 'Soft rock crushing', description: 'Compact dual-roller crushing for brittle and low-abrasion material.', capacity: 'Up to 450 t/h', image: plant },
  { slug: 'hgt-gyratory-crusher', name: 'HGT Gyratory Crusher', family: 'Crushing', tag: 'Primary crushing', description: 'Large-scale primary crusher engineered for high-volume mine flows.', capacity: 'Up to 8,890 t/h', image: mine },
  { slug: 'ci5x-impact-crusher', name: 'CI5X Impact Crusher', family: 'Crushing', tag: 'Impact crushing', description: 'High-efficiency impact crushing with optimized chamber geometry.', capacity: 'Up to 2,000 t/h', image: quarry },
  { slug: 'pfw-impact-crusher', name: 'PFW Impact Crusher', family: 'Crushing', tag: 'Impact crushing', description: 'Heavy-duty impact crusher for limestone and recycling applications.', capacity: 'Up to 800 t/h', image: machinery },
  { slug: 'pf-impact-crusher', name: 'PF Impact Crusher', family: 'Crushing', tag: 'Impact crushing', description: 'Dependable impact reduction for construction aggregate processing.', capacity: 'Up to 550 t/h', image: plant },
  { slug: 'vsi6x-sand-crusher', name: 'VSI6X Sand Crusher', family: 'Crushing', tag: 'Sand making', description: 'Latest-generation vertical shaft impact technology for shaped sand.', capacity: 'Up to 1,092 t/h', image: quarry },
  { slug: 'vsi5x-sand-crusher', name: 'VSI5X Sand Crusher', family: 'Crushing', tag: 'Sand making', description: 'Centrifugal crushing solution for consistent manufactured sand.', capacity: 'Up to 640 t/h', image: mine },
  { slug: 'vsi-sand-crusher', name: 'VSI Sand Crusher', family: 'Crushing', tag: 'Sand making', description: 'Classic vertical-shaft crusher for high-quality cubic output.', capacity: 'Up to 520 t/h', image: machinery },
  { slug: 'nk-portable-crushing-plant', name: 'NK Portable Crushing Plant', family: 'Mobile', tag: 'Portable crusher', description: 'Modular portable plant built for swift mobilization and production.', capacity: 'Up to 450 t/h', image: plant },
  { slug: 'k3-portable-crushing-plant', name: 'K3 Portable Crushing Plant', family: 'Mobile', tag: 'Portable crusher', description: 'Integrated three-combination plant for flexible site layouts.', capacity: 'Up to 450 t/h', image: quarry },
  { slug: 'ld-mobile-crushing-plant', name: 'LD Mobile Crushing Plant', family: 'Mobile', tag: 'Mobile crusher', description: 'Track-mounted mobility for productive work across changing sites.', capacity: 'Up to 500 t/h', image: mine },
  { slug: 'standard-modular-plant', name: 'Standard Modular Plant', family: 'Mobile', tag: 'Modular plant', description: 'Pre-engineered modules that simplify plant deployment and growth.', capacity: 'Up to 1,000 t/h', image: machinery },
  { slug: 'mk-semi-mobile-crusher-screen', name: 'MK Semi-mobile Crusher & Screen', family: 'Mobile', tag: 'Semi-mobile', description: 'Integrated crushing and screening where mobility meets stability.', capacity: 'Up to 450 t/h', image: plant },
  { slug: 'mtw-grinding-mill', name: 'MTW Grinding Mill', family: 'Grinding', tag: 'Hanging roller mill', description: 'Trapezium mill for reliable mineral powder processing.', capacity: '50–325 mesh', image: quarry },
  { slug: 'mrn-grinding-mill', name: 'MRN Grinding Mill', family: 'Grinding', tag: 'Hanging roller mill', description: 'Enhanced grinding platform for commercial mineral powder output.', capacity: '50–325 mesh', image: machinery },
  { slug: 'mtm-grinding-mill', name: 'MTM Grinding Mill', family: 'Grinding', tag: 'Hanging roller mill', description: 'Medium-speed mill balancing fine control and operating efficiency.', capacity: '50–325 mesh', image: mine },
  { slug: 'raymond-mill', name: 'Raymond Mill', family: 'Grinding', tag: 'Powder processing', description: 'Established pendulum mill technology for industrial minerals.', capacity: '80–325 mesh', image: plant },
  { slug: 'lm-vertical-grinding-mill', name: 'LM Vertical Grinding Mill', family: 'Grinding', tag: 'Vertical mill', description: 'Vertical grinding system combining grinding, drying and separation.', capacity: '80–425 mesh', image: quarry },
  { slug: 'lum-ultrafine-vertical-mill', name: 'LUM Ultrafine Vertical Mill', family: 'Grinding', tag: 'Ultrafine mill', description: 'High-capacity ultrafine processing for value-added mineral powders.', capacity: '425–3,000 mesh', image: machinery },
  { slug: 'xzm-ultrafine-grinding-mill', name: 'XZM Ultrafine Grinding Mill', family: 'Grinding', tag: 'Ultrafine mill', description: 'Micro-powder production engineered for demanding fineness targets.', capacity: '325–2,500 mesh', image: mine },
  { slug: 'hammer-mill', name: 'Hammer Mill', family: 'Grinding', tag: 'Fine crushing', description: 'Compact hammer solution for small-scale crushing and powder prep.', capacity: '0–3 mm output', image: plant },
  { slug: 'ore-grinding-mill', name: 'Ore Grinding Mill', family: 'Grinding', tag: 'Ore processing', description: 'Purpose-built grinding platform for mineral dressing workflows.', capacity: 'Custom process duty', image: quarry },
  { slug: 'aggregates-conveyor', name: 'Aggregates Conveyor', family: 'Process', tag: 'Material handling', description: 'Configured belt conveying for dependable pit-to-plant material flow.', capacity: 'Custom conveying duty', image: machinery },
];

export const families = ['All', 'Crushing', 'Mobile', 'Grinding', 'Process'] as const;

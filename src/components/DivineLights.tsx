/**
 * Efeito visual de raios de luz divina e partículas de poeira flutuante.
 * Inserido sobre o banner da Home para transmitir paz e transcendência.
 * Respeita prefers-reduced-motion.
 */
export function DivineLights() {
  return (
    <div className="divine-lights" aria-hidden="true">
      {/* Raios de luz descendentes — concentrados centro-direita */}
      <div className="divine-lights__rays">
        <div className="divine-lights__ray divine-lights__ray--1"></div>
        <div className="divine-lights__ray divine-lights__ray--2"></div>
        <div className="divine-lights__ray divine-lights__ray--3"></div>
        <div className="divine-lights__ray divine-lights__ray--4"></div>
        <div className="divine-lights__ray divine-lights__ray--5"></div>
        <div className="divine-lights__ray divine-lights__ray--6"></div>
        <div className="divine-lights__ray divine-lights__ray--7"></div>
        <div className="divine-lights__ray divine-lights__ray--8"></div>
      </div>

      {/* Partículas de poeira flutuante */}
      <div className="divine-lights__dust">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className={`divine-lights__particle divine-lights__particle--${i + 1}`}></span>
        ))}
      </div>
    </div>
  );
}

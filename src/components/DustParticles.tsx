/**
 * Efeito de partículas de poeira flutuante reutilizável.
 * Pode ser inserido em qualquer seção com position: relative + overflow: hidden.
 */
export function DustParticles({ count = 20 }: { count?: number }) {
  return (
    <div className="divine-lights__dust" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`divine-lights__particle divine-lights__particle--${(i % 28) + 1}`}></span>
      ))}
    </div>
  );
}

export const Plus = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg  
      xmlns="http://www.w3.org/2000/svg"  
      width="100"  
      height="100"  
      viewBox="0 0 24 24"  
      fill="none"  
      stroke="#7950f2"  
      stroke-width="2"  
      stroke-linecap="round"  
      stroke-linejoin="round"  
      className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  );
}
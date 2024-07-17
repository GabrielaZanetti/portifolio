// src/types/images.d.ts

declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.jpg" {
    const value: string;
    export default value;
  }
  declare module "*.ico" {
    const value: string;
    export default value;
  }
  
  // Adicione módulos para outros tipos de imagens se necessário (ex: .jpeg, .gif, etc.)
  
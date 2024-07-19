// src/types/images.d.ts

declare module '*.png' {
    const value: string
    export default value
}

declare module '*.jpg' {
    const value: string
    export default value
}
declare module '*.ico' {
    const value: string
    export default value
}

// Adicione m�dulos para outros tipos de imagens se necess�rio (ex: .jpeg, .gif, etc.)

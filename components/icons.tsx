type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
    logo: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
            <rect width="256" height="256" fill="none" />
            <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
        </svg>
    ),
    linkedIn: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M20.5 0h-17C1.7 0 0 1.7 0 3.5v17C0 22.3 1.7 24 3.5 24h17c1.8 0 3.5-1.7 3.5-3.5v-17C24 1.7 22.3 0 20.5 0zM7.8 19.5H4.7V9.5h3.1v10zM6.2 8.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19.5 19.5h-3.1v-5.2c0-1.2-.5-1.9-1.4-1.9-.8 0-1.3.6-1.5 1.2-.1.3-.1.7-.1 1.1v5.8h-3.1V9.5h3v1.6h.1c.4-.7 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8v5.2z" />
        </svg>
    ),
    facebook: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"
            />
        </svg>

    ),
    youtube: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
            <path
                fill="currentColor"
                d="M572.8 142.1c-6.4-24.1-24.1-42.7-48.2-48.2C472.5 80 288 80 288 80S103.5 80 51.4 93.9c-24.1 6.4-42.7 24.1-48.2 48.2C0 194.2 0 256 0 256s0 61.8 3.2 113.9c6.4 24.1 24.1 42.7 48.2 48.2C103.5 432 288 432 288 432s184.5 0 236.6-13.9c24.1-6.4 42.7-24.1 48.2-48.2C576 317.8 576 256 576 256s0-61.8-3.2-113.9zM224 352V160l160 96-160 96z"
            />
        </svg>
    ),
    Oink: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 98" {...props}>
            <path
                d="M 180.8 92.3 L 174.9 107.6 H 177.1 L 178.8 103 H 185.2 L 187 107.6 H 189.3 L 183 92.3 H 180.8 Z M 179.3 101.3 L 181 96.8 C 181.4 95.8 181.6 94.9 181.8 93.9 C 182 94.7 182.4 95.8 182.9 97.1 L 184.5 101.3 H 179.3 Z M 207.5 104.3 L 199.4 92.3 H 197.3 V 107.6 H 199.2 V 95.6 L 207.3 107.6 H 209.4 V 92.3 H 207.5 V 104.3 Z M 215.8 100.6 H 224.3 V 98.8 H 215.8 V 94.1 H 224.9 V 92.3 H 213.8 V 107.6 H 225.2 V 105.8 H 215.8 V 100.6 Z M 237 103 C 236.6 104.1 236.4 104.9 236.2 105.5 C 236 105 235.8 104.2 235.5 103.2 L 231.9 92.3 H 228.8 V 107.6 H 230.8 V 94.6 L 235.2 107.6 H 237 L 241.5 94.8 V 107.6 H 243.5 V 92.3 H 240.8 L 237 103 Z M 249.6 100.6 H 258.1 V 98.8 H 249.6 V 94.1 H 258.7 V 92.3 H 247.6 V 107.6 H 259 V 105.8 H 249.6 V 100.6 Z M 261.5 94.1 H 266.5 V 107.6 H 268.5 V 94.1 H 273.6 V 92.3 H 261.5 V 94.1 Z M 285.5 99.6 C 284.9 99.3 283.8 99 282.1 98.6 C 280.4 98.2 279.4 97.9 279 97.5 C 278.6 97.1 278.4 96.7 278.4 96.1 C 278.4 95.5 278.7 94.9 279.2 94.5 C 279.8 94.1 280.7 93.8 281.9 93.8 C 283.1 93.8 284 94 284.6 94.5 C 285.2 95 285.6 95.7 285.7 96.7 L 287.6 96.6 C 287.6 95.7 287.3 94.9 286.8 94.2 C 286.3 93.5 285.7 93 284.8 92.6 C 283.9 92.2 282.9 92.1 281.8 92.1 C 280.8 92.1 279.8 92.3 279 92.6 C 278.2 92.9 277.5 93.5 277.1 94.1 C 276.7 94.8 276.4 95.5 276.4 96.3 C 276.4 97 276.6 97.6 276.9 98.2 C 277.3 98.8 277.8 99.2 278.5 99.6 C 279.1 99.9 280.1 100.2 281.5 100.6 C 282.9 100.9 283.8 101.2 284.2 101.3 C 284.8 101.5 285.3 101.8 285.6 102.2 C 285.9 102.6 286 103 286 103.5 C 286 104 285.9 104.4 285.6 104.8 C 285.3 105.2 284.9 105.5 284.3 105.7 C 283.7 105.9 283 106 282.3 106 C 281.4 106 280.6 105.9 279.9 105.5 C 279.2 105.2 278.7 104.8 278.4 104.3 C 278.1 103.8 277.9 103.2 277.8 102.4 L 275.9 102.6 C 275.9 103.6 276.2 104.5 276.7 105.4 C 277.2 106.2 278 106.8 278.9 107.2 C 279.8 107.6 281 107.8 282.4 107.8 C 283.5 107.8 284.5 107.6 285.4 107.2 C 286.3 106.8 286.9 106.2 287.4 105.5 C 287.9 104.8 288.1 104 288.1 103.2 C 288.1 102.4 287.9 101.7 287.5 101 C 287 100.5 286.4 100 285.5 99.6 V 99.6 Z M 301.1 105.2 C 300.3 105.9 299.3 106.2 298.2 106.2 C 297.3 106.2 296.4 106 295.6 105.5 C 294.8 105 294.2 104.3 293.8 103.3 C 293.4 102.3 293.2 101.2 293.2 99.9 C 293.2 98.9 293.4 97.9 293.7 97 C 294 96 294.6 95.3 295.4 94.7 C 296.2 94.1 297.2 93.9 298.4 93.9 C 299.4 93.9 300.3 94.2 301 94.7 C 301.7 95.2 302.2 96 302.5 97.1 L 304.5 96.6 C 304.1 95.2 303.4 94.1 302.3 93.3 C 301.3 92.5 300 92.1 298.4 92.1 C 297 92.1 295.8 92.4 294.7 93 C 293.6 93.6 292.7 94.5 292.1 95.7 C 291.5 96.9 291.2 98.3 291.2 99.9 C 291.2 101.4 291.5 102.7 292 104 C 292.5 105.3 293.3 106.2 294.4 106.9 C 295.4 107.6 296.8 107.9 298.4 107.9 C 300 107.9 301.3 107.5 302.4 106.6 C 303.5 105.7 304.3 104.5 304.7 102.8 L 302.7 102.3 C 302.4 103.6 301.9 104.5 301.1 105.2 V 105.2 Z M 318.1 98.6 H 310.1 V 92.3 H 308.1 V 107.6 H 310.1 V 100.4 H 318.1 V 107.6 H 320.1 V 92.3 H 318.1 V 98.6 Z M 326.4 100.6 H 334.9 V 98.8 H 326.4 V 94.1 H 335.5 V 92.3 H 324.4 V 107.6 H 335.8 V 105.8 H 326.4 V 100.6 Z M 351.8 92.3 H 349 L 341.4 99.9 V 92.3 H 339.4 V 107.6 H 341.4 V 102.3 L 343.9 99.9 L 349.4 107.7 H 352.1 L 345.4 98.6 L 351.8 92.3 Z M 370.8 105.2 C 370 105.9 369 106.2 367.9 106.2 C 367 106.2 366.1 106 365.3 105.5 C 364.5 105 363.9 104.3 363.5 103.3 C 363.1 102.3 362.9 101.2 362.9 99.9 C 362.9 98.9 363.1 97.9 363.4 97 C 363.7 96 364.3 95.3 365.1 94.7 C 365.9 94.1 366.9 93.9 368.1 93.9 C 369.1 93.9 370 94.2 370.7 94.7 C 371.4 95.2 371.9 96 372.2 97.1 L 374.2 96.6 C 373.8 95.2 373.1 94.1 372 93.3 C 371 92.5 369.7 92.1 368.1 92.1 C 366.7 92.1 365.5 92.4 364.4 93 C 363.3 93.6 362.4 94.5 361.8 95.7 C 361.2 96.9 360.9 98.3 360.9 99.9 C 360.9 101.4 361.2 102.7 361.7 104 C 362.2 105.3 363 106.2 364.1 106.9 C 365.1 107.6 366.5 107.9 368.1 107.9 C 369.7 107.9 371 107.5 372.1 106.6 C 373.2 105.7 374 104.5 374.4 102.8 L 372.4 102.3 C 372.1 103.6 371.6 104.5 370.8 105.2 V 105.2 Z M 388.3 93.1 C 387.2 92.4 385.9 92.1 384.5 92.1 C 382.3 92.1 380.6 92.8 379.2 94.3 C 377.8 95.7 377.1 97.7 377.1 100.3 C 377.1 101.6 377.4 102.9 378 104.1 C 378.6 105.3 379.4 106.3 380.6 107 C 381.7 107.7 383 108 384.5 108 C 385.8 108 387.1 107.7 388.2 107.1 C 389.3 106.5 390.2 105.5 390.9 104.3 C 391.5 103.1 391.8 101.7 391.8 100.1 C 391.8 98.6 391.5 97.2 390.9 96 C 390.3 94.7 389.5 93.7 388.3 93.1 V 93.1 Z M 388.2 104.6 C 387.2 105.7 386 106.2 384.4 106.2 C 382.9 106.2 381.7 105.7 380.7 104.6 C 379.7 103.5 379.2 102.1 379.2 100.2 C 379.2 97.9 379.7 96.2 380.7 95.3 C 381.7 94.3 383 93.8 384.4 93.8 C 385.4 93.8 386.3 94.1 387.1 94.6 C 387.9 95.1 388.5 95.8 388.9 96.8 C 389.3 97.7 389.5 98.8 389.5 100.1 C 389.7 102 389.2 103.5 388.2 104.6 Z M 403.4 103 C 403 104.1 402.8 104.9 402.6 105.5 C 402.4 105 402.2 104.2 401.9 103.2 L 398.3 92.3 H 395.2 V 107.6 H 397.2 V 94.6 L 401.6 107.6 H 403.4 L 407.9 94.8 V 107.6 H 409.9 V 92.3 H 407.2 L 403.4 103 Z M 424 93.2 C 423.5 92.8 422.9 92.6 422.1 92.5 C 421.6 92.4 420.8 92.4 419.8 92.4 H 414 V 107.7 H 416 V 101.5 H 419.9 C 422.1 101.5 423.6 101.1 424.4 100.1 C 425.2 99.2 425.6 98.1 425.6 96.8 C 425.6 96 425.4 95.3 425.1 94.7 C 424.9 94 424.5 93.5 424 93.2 V 93.2 Z M 422.8 98.9 C 422.2 99.4 421.3 99.6 420 99.6 H 416 V 94.1 H 419.9 C 420.8 94.1 421.4 94.1 421.8 94.2 C 422.3 94.3 422.8 94.6 423.1 95.1 C 423.4 95.6 423.6 96.1 423.6 96.7 C 423.6 97.7 423.3 98.4 422.8 98.9 V 98.9 Z M 431.7 92.3 L 425.8 107.6 H 428 L 429.7 103 H 436.1 L 437.9 107.6 H 440.2 L 433.9 92.3 H 431.7 Z M 430.3 101.3 L 432 96.8 C 432.4 95.8 432.6 94.9 432.8 93.9 C 433 94.7 433.4 95.8 433.9 97.1 L 435.5 101.3 H 430.3 Z M 452.8 104.3 L 444.7 92.3 H 442.6 V 107.6 H 444.5 V 95.6 L 452.6 107.6 H 454.7 V 92.3 H 452.8 V 104.3 Z M 469.1 92.3 L 466.1 96.8 C 465.4 97.8 464.9 98.7 464.4 99.5 C 463.9 98.6 463.4 97.8 462.8 96.9 L 459.8 92.3 H 457.3 L 463.2 101.1 V 107.6 H 465.2 V 101.1 L 471.3 92.3 H 469.1 Z M 398.3 16 H 384.6 V 29.7 H 398.3 C 403.2 29.7 407.2 26.7 407.2 22.9 C 407.2 19.1 403.1 16 398.3 16 Z M 326.1 53.3 C 326.1 58.8 320.3 63.3 313.1 63.3 H 300.2 V 43.3 H 313.1 C 320.3 43.3 326.1 47.8 326.1 53.3 Z M 322.9 22.9 C 322.9 26.7 318.8 29.7 314 29.7 H 300.3 V 16 H 314 C 318.8 16 322.9 19.1 322.9 22.9 Z M 348.4 22.9 C 348.4 10.8 339.1 2.4 317 2.4 H 275.2 V 77 H 315.3 C 339.7 77 351.5 66.4 351.5 53.4 C 351.5 46.8 346.9 39 338.7 35.9 C 345 33.4 348.4 28.1 348.4 22.9 Z M 118.6 13.8 C 110 13.8 103.1 21.7 103.1 39.7 C 103.1 57.7 110 65.5 118.6 65.5 C 127.1 65.5 134.1 57.7 134.1 39.7 C 134 21.7 127.1 13.8 118.6 13.8 Z M 118.6 78.9 C 95.8 78.9 77.3 65 77.3 39.7 C 77.3 14.4 95.8 0.400002 118.6 0.400002 C 141.4 0.400002 159.9 14.5 159.9 39.7 C 159.9 65 141.3 78.9 118.6 78.9 Z M 411.1 77 L 384.5 41.8 V 77 H 359.6 V 2.4 H 401.4 C 423.5 2.4 433.5 11.6 433.5 22.9 C 433.5 34.1 426.5 40.1 412.3 42.3 L 438.2 77 H 411.1 Z M 446.5 2.4 H 471.4 V 77 H 446.5 V 2.4 Z M 238.4 77 H 263.3 V 2.4 H 238.4 V 77 Z M 168.1 2.4 H 193 V 63.4 H 228.9 V 77 H 168.1 V 2.4 Z M 36 79.3 C 19.9 79.3 7.7 72 0 63.9 L 7.4 54.7 C 14.1 60.3 22.6 64.5 32.8 64.5 C 39.1 64.5 42.6 61.5 42.6 58.2 C 42.6 54.3 37.2 51.8 25.1 47.1 C 9.7 41.3 2.4 33 2.4 23.3 C 2.4 11.1 14.1 0 32.8 0 C 47 0 59.9 6.4 67.1 12.1 L 60.7 22 C 53.7 17.7 46.5 14.8 36.6 14.8 C 32.1 14.8 29.1 16.8 29.1 19.7 C 29.1 22.2 32.6 25.5 43.2 29.4 C 64.7 37.1 70.9 47.2 70.3 56.3 C 69.6 67.5 57.9 79.3 36 79.3"
                fill="currentColor"
            />
            <path
                d="M12.001,19.2c-3.2,0-5.2-1.6-6-4.8c1.2,1.6,2.6,2.2,4.2,1.8c0.913-0.228,1.565-0.89,2.288-1.624 C13.666,13.382,15.027,12,18.001,12c3.2,0,5.2,1.6,6,4.8c-1.2-1.6-2.6-2.2-4.2-1.8c-0.913,0.228-1.565,0.89-2.288,1.624 C16.337,17.618,14.976,19.2,12.001,19.2z"
                fill="currentColor"
            />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    rocket: (props: IconProps) => (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    ),
    sun: (props: IconProps) => (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            </path>
        </svg>
    ),
    hand: (props: IconProps) => (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2a1 1 0 10-2 0v6.5a.5.5 0 01-1 0V3a1 1 0 10-2 0v5.5a.5.5 0 01-1 0V5a1 1 0 10-2 0v7a7 7 0 1014 0V8a1 1 0 10-2 0v3.5a.5.5 0 01-1 0V3a1 1 0 10-2 0v5.5a.5.5 0 01-1 0V2z">
            </path>
        </svg>

    ),
    OK: (props: IconProps) => (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    ),
    spinner: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
}
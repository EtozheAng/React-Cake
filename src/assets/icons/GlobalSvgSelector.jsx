const GlobalSvgSelector = ({ id }) => {
  switch (String(id)) {
    case 'telegram':
      return (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_81_344)">
            <path
              d="M17.4998 35.0006C27.1647 35.0006 34.9996 27.1656 34.9996 17.5008C34.9996 7.8359 27.1647 0.000976562 17.4998 0.000976562C7.83493 0.000976562 0 7.8359 0 17.5008C0 27.1656 7.83493 35.0006 17.4998 35.0006Z"
              fill="#41B4E6"
            />
            <path
              d="M15.8005 20.0496L23.709 26.0206L27.7012 8.97949L7.29883 17.0048L13.507 19.0611L24.8371 11.4612L15.8005 20.0496Z"
              fill="white"
            />
            <path
              d="M13.5073 19.0613L15.2076 25.1798L15.8008 20.0498L24.8374 11.4614L13.5073 19.0613Z"
              fill="#D2D2D7"
            />
            <path
              d="M18.371 21.9904L15.2075 25.1798L15.8007 20.0498L18.371 21.9904Z"
              fill="#B9B9BE"
            />
          </g>
          <defs>
            <clipPath id="clip0_81_344">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'cart':
      return (
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22.5"
            cy="22.5"
            r="22.5"
            fill="url(#paint0_linear_96_3584)"
          />
          <path
            d="M33.283 19.801C32.7807 19.172 32.0953 18.8247 31.3536 18.8247H29.6589C29.4993 14.4782 26.3494 11 22.5 11C18.6506 11 15.5007 14.4782 15.3411 18.8247H13.6464C12.9047 18.8247 12.2193 19.172 11.717 19.801C11.0833 20.5896 10.8533 21.688 11.0927 22.7441L13.1254 31.7C13.4305 33.0518 14.482 34 15.6791 34H29.3162C30.5133 34 31.5648 33.0565 31.87 31.7L33.9073 22.7441C34.1467 21.688 33.9167 20.5896 33.283 19.801ZM22.5 12.9151C25.2978 12.9151 27.5887 15.5343 27.7389 18.8247H17.2611C17.4113 15.539 19.7022 12.9151 22.5 12.9151ZM32.0389 22.3169L30.0063 31.2776C29.903 31.7376 29.6073 32.0849 29.3209 32.0849H15.6791C15.3927 32.0849 15.097 31.7376 14.9937 31.2776L12.9611 22.3169C12.8531 21.8429 12.7874 20.7398 13.6464 20.7398H31.3536C32.2784 20.7398 32.1469 21.8429 32.0389 22.3169Z"
            fill="white"
          />
          <path
            d="M17.7446 22.6455C17.2141 22.6455 16.787 23.0727 16.787 23.6031V29.5878C16.787 30.1182 17.2141 30.5453 17.7446 30.5453C18.2751 30.5453 18.7023 30.1182 18.7023 29.5878V23.6031C18.707 23.0773 18.2751 22.6455 17.7446 22.6455Z"
            fill="white"
          />
          <path
            d="M22.3873 22.6455C21.8569 22.6455 21.4297 23.0727 21.4297 23.6031V29.5878C21.4297 30.1182 21.8569 30.5453 22.3873 30.5453C22.9178 30.5453 23.345 30.1182 23.345 29.5878V23.6031C23.345 23.0773 22.9131 22.6455 22.3873 22.6455Z"
            fill="white"
          />
          <path
            d="M27.0254 22.6455C26.4949 22.6455 26.0677 23.0727 26.0677 23.6031V29.5878C26.0677 30.1182 26.4949 30.5453 27.0254 30.5453C27.5558 30.5453 27.983 30.1182 27.983 29.5878V23.6031C27.983 23.0773 27.5558 22.6455 27.0254 22.6455Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_96_3584"
              x1="45.3543"
              y1="20.625"
              x2="-0.000653109"
              y2="20.5832"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E75C6B" />
              <stop offset="1" stopColor="#EB8794" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'cartFull':
      return (
        <svg
          width="61"
          height="55"
          viewBox="0 0 61 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22.5"
            cy="32.5"
            r="22.5"
            fill="url(#paint0_linear_107_2273)"
          />
          <path
            d="M33.283 29.801C32.7807 29.172 32.0953 28.8247 31.3536 28.8247H29.6589C29.4993 24.4782 26.3494 21 22.5 21C18.6506 21 15.5007 24.4782 15.3411 28.8247H13.6464C12.9047 28.8247 12.2193 29.172 11.717 29.801C11.0833 30.5896 10.8533 31.688 11.0927 32.7441L13.1254 41.7C13.4305 43.0518 14.482 44 15.6791 44H29.3162C30.5133 44 31.5648 43.0565 31.87 41.7L33.9073 32.7441C34.1467 31.688 33.9167 30.5896 33.283 29.801ZM22.5 22.9151C25.2978 22.9151 27.5887 25.5343 27.7389 28.8247H17.2611C17.4113 25.539 19.7022 22.9151 22.5 22.9151ZM32.0389 32.3169L30.0063 41.2776C29.903 41.7376 29.6073 42.0849 29.3209 42.0849H15.6791C15.3927 42.0849 15.097 41.7376 14.9937 41.2776L12.9611 32.3169C12.8531 31.8429 12.7874 30.7398 13.6464 30.7398H31.3536C32.2784 30.7398 32.1469 31.8429 32.0389 32.3169Z"
            fill="white"
          />
          <path
            d="M17.7446 32.6455C17.2141 32.6455 16.787 33.0727 16.787 33.6031V39.5878C16.787 40.1182 17.2141 40.5453 17.7446 40.5453C18.2751 40.5453 18.7023 40.1182 18.7023 39.5878V33.6031C18.707 33.0773 18.2751 32.6455 17.7446 32.6455Z"
            fill="white"
          />
          <path
            d="M22.3873 32.6455C21.8569 32.6455 21.4297 33.0727 21.4297 33.6031V39.5878C21.4297 40.1182 21.8569 40.5453 22.3873 40.5453C22.9178 40.5453 23.345 40.1182 23.345 39.5878V33.6031C23.345 33.0773 22.9131 32.6455 22.3873 32.6455Z"
            fill="white"
          />
          <path
            d="M27.0254 32.6455C26.4949 32.6455 26.0677 33.0727 26.0677 33.6031V39.5878C26.0677 40.1182 26.4949 40.5453 27.0254 40.5453C27.5558 40.5453 27.983 40.1182 27.983 39.5878V33.6031C27.983 33.0773 27.5558 32.6455 27.0254 32.6455Z"
            fill="white"
          />
          <circle cx="46" cy="15" r="15" fill="white" />
          <defs>
            <linearGradient
              id="paint0_linear_107_2273"
              x1="45.3543"
              y1="30.625"
              x2="-0.000653109"
              y2="30.5832"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E75C6B" />
              <stop offset="1" stopColor="#EB8794" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'arrowDown':
      return (
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.49998 6C5.30284 6 5.10572 5.92797 4.95542 5.78422L0.225656 1.25832C-0.0752183 0.970413 -0.0752183 0.503627 0.225656 0.21584C0.526409 -0.0719468 1.01413 -0.0719468 1.31503 0.21584L5.49998 4.22061L9.68496 0.21598C9.98584 -0.0718069 10.4735 -0.0718069 10.7742 0.21598C11.0753 0.503767 11.0753 0.970553 10.7742 1.25846L6.04455 5.78436C5.89417 5.92814 5.69705 6 5.49998 6Z"
            fill="#464646"
          />
        </svg>
      )
    case 'miniCart':
      return (
        <svg
          width="77"
          height="77"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_214_2907)">
            <circle
              cx="38.5"
              cy="35.5"
              r="17.5"
              fill="url(#paint0_linear_214_2907)"
            />
          </g>
          <path
            d="M46.8869 33.4009C46.4962 32.9117 45.9631 32.6415 45.3862 32.6415H44.0681C43.944 29.2609 41.4941 26.5557 38.5001 26.5557C35.5061 26.5557 33.0562 29.2609 32.9321 32.6415H31.614C31.0371 32.6415 30.504 32.9117 30.1134 33.4009C29.6205 34.0142 29.4416 34.8685 29.6278 35.69L31.2087 42.6557C31.446 43.7071 32.2639 44.4446 33.195 44.4446H43.8016C44.7327 44.4446 45.5505 43.7107 45.7878 42.6557L47.3725 35.69C47.5587 34.8685 47.3798 34.0142 46.8869 33.4009ZM38.5001 28.0452C40.6762 28.0452 42.458 30.0823 42.5748 32.6415H34.4254C34.5422 30.086 36.324 28.0452 38.5001 28.0452ZM45.9193 35.3577L44.3383 42.3271C44.258 42.6849 44.028 42.955 43.8053 42.955H33.195C32.9722 42.955 32.7422 42.6849 32.6619 42.3271L31.0809 35.3577C30.997 34.989 30.9458 34.1311 31.614 34.1311H45.3862C46.1055 34.1311 46.0033 34.989 45.9193 35.3577Z"
            fill="white"
          />
          <path
            d="M34.8015 35.6133C34.3889 35.6133 34.0566 35.9455 34.0566 36.358V41.0128C34.0566 41.4253 34.3889 41.7576 34.8015 41.7576C35.2141 41.7576 35.5463 41.4253 35.5463 41.0128V36.358C35.55 35.9492 35.2141 35.6133 34.8015 35.6133Z"
            fill="white"
          />
          <path
            d="M38.4125 35.6133C37.9999 35.6133 37.6676 35.9455 37.6676 36.358V41.0128C37.6676 41.4253 37.9999 41.7576 38.4125 41.7576C38.8251 41.7576 39.1573 41.4253 39.1573 41.0128V36.358C39.1573 35.9492 38.8214 35.6133 38.4125 35.6133Z"
            fill="white"
          />
          <path
            d="M42.0198 35.6133C41.6073 35.6133 41.275 35.9455 41.275 36.358V41.0128C41.275 41.4253 41.6073 41.7576 42.0198 41.7576C42.4324 41.7576 42.7647 41.4253 42.7647 41.0128V36.358C42.7647 35.9492 42.4324 35.6133 42.0198 35.6133Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_214_2907"
              x="0.777777"
              y="0.888888"
              width="75.4444"
              height="75.4444"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3.11111" />
              <feGaussianBlur stdDeviation="10.1111" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.909804 0 0 0 0 0.360784 0 0 0 0 0.419608 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_214_2907"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_214_2907"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_214_2907"
              x1="56.2756"
              y1="34.0417"
              x2="20.9995"
              y2="34.0091"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E75C6B" />
              <stop offset="1" stopColor="#EB8794" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'minusButton':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
          <circle cx="13.5" cy="13.5" r="13" fill="#EB8794" />
          <line
            x1="7"
            y1="13.5"
            x2="20"
            y2="13.5"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        </svg>
      )
    case 'plusButton':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
          <circle cx="13.5" cy="13.5" r="13" fill="#EB8794" />
          <line
            x1="7"
            y1="13.5"
            x2="20"
            y2="13.5"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <line
            x1="13.5"
            y1="7"
            x2="13.5"
            y2="20"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        </svg>
      )
    case 'close':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
          <circle cx="22.5" cy="22.5" r="22.5" fill="#e9657e" />
          <line
            x1="11.25"
            y1="11.25"
            x2="33.75"
            y2="33.75"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="33.75"
            y1="11.25"
            x2="11.25"
            y2="33.75"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      )
    default:
      return false
  }
}

export default GlobalSvgSelector

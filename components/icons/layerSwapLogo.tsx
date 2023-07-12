import { FC } from "react";

interface Props {
    className?: string
}

const LayerswapLogo: FC<Props> = (({ className }) => {
    return (
        <>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" width="213" height="75" viewBox="0 0 213 75" fill="none">
                <path d="M77.3624 28.306C76.7662 28.306 76.2829 27.8247 76.2829 27.2309V11.3296C76.2829 10.7359 76.7662 10.2546 77.3624 10.2546H79.1888C79.785 10.2546 80.2683 10.7359 80.2683 11.3296V24.9518H87.5711C88.1673 24.9518 88.6507 25.4331 88.6507 26.0268V27.2309C88.6507 27.8247 88.1673 28.306 87.5711 28.306H77.3624Z" fill="white" />
                <path d="M94.9565 28.5876C94.0137 28.5876 93.1823 28.4084 92.4624 28.0499C91.7424 27.6915 91.1682 27.205 90.7396 26.5905C90.3282 25.9759 90.1225 25.2846 90.1225 24.5165C90.1225 23.6118 90.3625 22.8863 90.8425 22.3401C91.3224 21.7938 92.1024 21.4098 93.1823 21.1878C94.2623 20.9489 95.6936 20.8294 97.4763 20.8294H98.402V20.3941C98.402 19.643 98.2306 19.1139 97.8877 18.8066C97.5449 18.4823 96.9621 18.3201 96.1393 18.3201C95.4536 18.3201 94.7251 18.4311 93.9537 18.653C93.5669 18.758 93.1801 18.8922 92.7933 19.0556C92.1929 19.3093 91.4732 19.0661 91.2279 18.4643L90.971 17.8342C90.7768 17.3579 90.9467 16.806 91.4109 16.5812C91.6713 16.4551 91.9532 16.3349 92.2567 16.2205C92.9081 15.9815 93.5852 15.8023 94.288 15.6828C94.9908 15.5462 95.6593 15.478 96.2936 15.478C98.2477 15.478 99.7048 15.9218 100.665 16.8094C101.625 17.68 102.105 19.037 102.105 20.8806V27.2309C102.105 27.8247 101.621 28.306 101.025 28.306H99.5587C98.9625 28.306 98.4791 27.8247 98.4791 27.2309V26.4112C98.222 27.077 97.7849 27.6061 97.1678 27.9987C96.5678 28.3913 95.8307 28.5876 94.9565 28.5876ZM95.8307 26.0016C96.5507 26.0016 97.1592 25.754 97.6563 25.259C98.1534 24.764 98.402 24.1239 98.402 23.3387V22.8266H97.5021C96.1821 22.8266 95.2479 22.946 94.6994 23.185C94.1508 23.4069 93.8766 23.7995 93.8766 24.3628C93.8766 24.8408 94.0394 25.2334 94.3651 25.5407C94.7079 25.8479 95.1965 26.0016 95.8307 26.0016Z" fill="white" />
                <path d="M107.528 32.9149C106.743 32.9149 106.221 32.1071 106.545 31.3953L108.269 27.6147L103.733 17.2382C103.423 16.5281 103.945 15.734 104.723 15.734H106.429C106.872 15.734 107.271 16.004 107.433 16.4148L110.326 23.7227L113.318 16.4038C113.484 15.9988 113.879 15.734 114.318 15.734H115.79C116.571 15.734 117.094 16.5334 116.778 17.2442L110.097 32.2749C109.924 32.664 109.537 32.9149 109.109 32.9149H107.528Z" fill="white" />
                <path d="M124.841 28.5876C123.35 28.5876 122.064 28.3231 120.984 27.7939C119.921 27.2477 119.098 26.488 118.516 25.5151C117.95 24.525 117.667 23.3643 117.667 22.0328C117.667 20.7355 117.941 19.6003 118.49 18.6274C119.056 17.6373 119.818 16.8692 120.778 16.3229C121.755 15.7596 122.878 15.478 124.147 15.478C125.981 15.478 127.438 16.0583 128.518 17.2191C129.598 18.3628 130.138 19.9161 130.138 21.8792C130.138 22.4165 129.7 22.8522 129.161 22.8522H121.37C121.507 23.8422 121.867 24.5677 122.45 25.0286C123.05 25.4724 123.872 25.6943 124.918 25.6943C125.604 25.6943 126.298 25.5919 127.001 25.387C127.234 25.3191 127.459 25.239 127.677 25.1468C128.334 24.8685 129.164 25.0939 129.427 25.7551L129.63 26.2659C129.808 26.7149 129.668 27.2349 129.246 27.474C128.759 27.7502 128.208 27.9849 127.592 28.178C126.684 28.4511 125.767 28.5876 124.841 28.5876ZM124.301 18.0384C123.478 18.0384 122.81 18.286 122.295 18.781C121.798 19.276 121.49 19.9673 121.37 20.855H126.924C126.821 18.9773 125.946 18.0384 124.301 18.0384Z" fill="white" />
                <path d="M133.476 28.306C132.879 28.306 132.396 27.8247 132.396 27.2309V16.8091C132.396 16.2153 132.879 15.734 133.476 15.734H135.122C135.718 15.734 136.201 16.2153 136.201 16.8091V17.9104C136.801 16.4424 138.087 15.6316 140.058 15.478L140.115 15.4741C140.709 15.4338 141.224 15.8795 141.266 16.4706L141.347 17.6172C141.389 18.195 140.963 18.7013 140.384 18.7623L139.236 18.8834C137.316 19.0712 136.356 20.0442 136.356 21.8024V27.2309C136.356 27.8247 135.872 28.306 135.276 28.306H133.476Z" fill="white" />
                <path d="M147.701 28.5876C146.587 28.5876 145.55 28.4596 144.59 28.2036C143.959 28.0355 143.399 27.8269 142.909 27.5778C142.474 27.3563 142.316 26.8356 142.484 26.3784L142.667 25.8839C142.903 25.2443 143.671 24.9833 144.303 25.2455C144.614 25.3748 144.941 25.4903 145.284 25.5919C146.107 25.8138 146.921 25.9247 147.727 25.9247C148.446 25.9247 148.978 25.8138 149.321 25.5919C149.664 25.3529 149.835 25.0456 149.835 24.6701C149.835 24.0727 149.398 23.6971 148.524 23.5435L145.824 23.057C144.744 22.8692 143.921 22.4852 143.355 21.9048C142.79 21.3244 142.507 20.5648 142.507 19.6259C142.507 18.7725 142.747 18.0384 143.227 17.4239C143.707 16.8094 144.367 16.3315 145.207 15.9901C146.047 15.6487 147.015 15.478 148.112 15.478C149.021 15.478 149.904 15.5975 150.761 15.8364C151.334 15.9849 151.854 16.1945 152.32 16.4653C152.727 16.7018 152.855 17.2092 152.683 17.6463L152.507 18.0943C152.248 18.7514 151.426 18.99 150.774 18.7118C150.574 18.6261 150.363 18.5467 150.144 18.4737C149.441 18.2348 148.781 18.1153 148.164 18.1153C147.392 18.1153 146.835 18.2433 146.492 18.4993C146.149 18.7383 145.978 19.0456 145.978 19.4211C145.978 20.0186 146.381 20.3941 147.187 20.5477L149.886 21.0342C151.001 21.222 151.849 21.5975 152.432 22.1608C153.015 22.7071 153.306 23.4581 153.306 24.4141C153.306 25.7284 152.792 26.7526 151.763 27.4866C150.735 28.2206 149.381 28.5876 147.701 28.5876Z" fill="white" />
                <path d="M159.571 28.306C159.132 28.306 158.737 28.0413 158.571 27.6365L154.308 17.2146C154.019 16.5076 154.542 15.734 155.308 15.734H156.886C157.337 15.734 157.741 16.0135 157.898 16.4347L160.645 23.7995L163.392 16.4347C163.549 16.0135 163.953 15.734 164.404 15.734H165.471C165.924 15.734 166.328 16.0155 166.484 16.4389L169.233 23.902L171.982 16.4389C172.138 16.0155 172.543 15.734 172.996 15.734H174.371C175.136 15.734 175.658 16.5046 175.372 17.2111L171.151 27.633C170.987 28.0397 170.59 28.306 170.15 28.306H168.327C167.881 28.306 167.481 28.0331 167.321 27.619L164.811 21.1622L162.374 27.6096C162.216 28.0286 161.813 28.306 161.364 28.306H159.571Z" fill="white" />
                <path d="M181.435 28.5876C180.493 28.5876 179.661 28.4084 178.941 28.0499C178.221 27.6915 177.647 27.205 177.219 26.5905C176.807 25.9759 176.601 25.2846 176.601 24.5165C176.601 23.6118 176.841 22.8863 177.321 22.3401C177.801 21.7938 178.581 21.4098 179.661 21.1878C180.741 20.9489 182.173 20.8294 183.955 20.8294H184.881V20.3941C184.881 19.643 184.71 19.1139 184.367 18.8066C184.024 18.4823 183.441 18.3201 182.618 18.3201C181.933 18.3201 181.204 18.4311 180.433 18.653C180.046 18.758 179.659 18.8922 179.272 19.0556C178.672 19.3093 177.952 19.0661 177.707 18.4643L177.45 17.8342C177.256 17.3579 177.426 16.806 177.89 16.5812C178.15 16.4551 178.432 16.3349 178.736 16.2205C179.387 15.9815 180.064 15.8023 180.767 15.6828C181.47 15.5462 182.138 15.478 182.773 15.478C184.727 15.478 186.184 15.9218 187.144 16.8094C188.104 17.68 188.584 19.037 188.584 20.8806V27.2309C188.584 27.8247 188.1 28.306 187.504 28.306H186.038C185.441 28.306 184.958 27.8247 184.958 27.2309V26.4112C184.701 27.077 184.264 27.6061 183.647 27.9987C183.047 28.3913 182.31 28.5876 181.435 28.5876ZM182.31 26.0016C183.03 26.0016 183.638 25.754 184.135 25.259C184.632 24.764 184.881 24.1239 184.881 23.3387V22.8266H183.981C182.661 22.8266 181.727 22.946 181.178 23.185C180.63 23.4069 180.356 23.7995 180.356 24.3628C180.356 24.8408 180.518 25.2334 180.844 25.5407C181.187 25.8479 181.675 26.0016 182.31 26.0016Z" fill="white" />
                <path d="M192.559 32.9149C191.963 32.9149 191.48 32.4335 191.48 31.8398V16.8091C191.48 16.2153 191.963 15.734 192.559 15.734H194.206C194.802 15.734 195.285 16.2153 195.285 16.8091V17.6032C195.628 16.9545 196.151 16.4424 196.854 16.0669C197.574 15.6743 198.379 15.478 199.271 15.478C200.368 15.478 201.328 15.7425 202.151 16.2717C202.991 16.8009 203.642 17.552 204.105 18.5249C204.568 19.4979 204.799 20.6587 204.799 22.0072C204.799 23.3557 204.568 24.525 204.105 25.5151C203.642 26.488 202.991 27.2477 202.151 27.7939C201.328 28.3231 200.368 28.5876 199.271 28.5876C198.431 28.5876 197.659 28.4084 196.957 28.0499C196.271 27.6915 195.74 27.2135 195.362 26.6161V31.8398C195.362 32.4335 194.879 32.9149 194.283 32.9149H192.559ZM198.114 25.6943C198.937 25.6943 199.605 25.3956 200.119 24.7981C200.634 24.2007 200.891 23.2704 200.891 22.0072C200.891 20.7611 200.634 19.8479 200.119 19.2675C199.605 18.67 198.937 18.3713 198.114 18.3713C197.274 18.3713 196.597 18.67 196.082 19.2675C195.568 19.8479 195.311 20.7611 195.311 22.0072C195.311 23.2704 195.568 24.2007 196.082 24.7981C196.597 25.3956 197.274 25.6943 198.114 25.6943Z" fill="white" />
                <path opacity="0.3" d="M28.7003 32.3542C28.7003 30.5327 30.177 29.056 31.9985 29.056L60.4448 29.056C62.2663 29.056 63.743 30.5327 63.743 32.3542L63.743 60.8005C63.743 62.622 62.2663 64.0986 60.4448 64.0986L31.9985 64.0986C30.177 64.0986 28.7003 62.622 28.7003 60.8005L28.7003 32.3542Z" fill="#FF0093" />
                <path opacity="0.5" d="M57.2688 54.3269C57.2688 56.1484 55.7922 57.625 53.9707 57.625L25.5243 57.625C23.7028 57.625 22.2262 56.1484 22.2262 54.3269L22.2262 25.8805C22.2262 24.059 23.7028 22.5824 25.5243 22.5824L53.9707 22.5824C55.7922 22.5824 57.2688 24.059 57.2688 25.8805L57.2688 54.3269Z" fill="#FF0093" />
                <path fill-rule="evenodd" clipRule="evenodd" d="M53.3521 11.2749C53.3698 10.6231 53.3615 9.956 53.3314 9.50263C53.2631 7.82428 51.9833 -0.929186 40.0364 4.22261C32.8487 7.31237 27.5495 11.8559 23.7904 16.1081L19.0504 16.1081C17.2289 16.1081 15.7523 17.5847 15.7523 19.4062L15.7523 27.3055C18.2597 24.5364 22.2449 21.4058 28.7523 18.6085C20.4173 23.4745 13.1972 32.2633 9.0552 43.7739C8.08348 47.5524 7.84101 51.1742 9.207 53.7169C11.1338 57.3037 18.3069 54.8831 21.7092 53.735L21.7627 53.7169C24.4943 52.5321 25.6393 51.6795 26.2427 51.2302C26.2804 51.2021 26.316 51.1756 26.3497 51.1507L47.4967 51.1507C49.3182 51.1507 50.7949 49.6741 50.7949 47.8526L50.7949 19.4062C50.7949 17.5847 49.3182 16.1081 47.4967 16.1081L30.8167 16.1081C37.4521 8.73749 44.3781 4.37333 49.1388 5.39169C52.317 6.06382 52.363 9.00115 52.2018 11.2935L53.3521 11.2749ZM13.207 51.2226C13.2659 49.127 14.0476 45.4504 15.7523 40.8815L15.7523 47.8526C15.7523 49.6741 17.2289 51.1507 19.0504 51.1507L24.267 51.1507C23.6355 51.5625 22.7221 52.0359 21.3619 52.5346C16.3911 54.3572 13.207 54.2226 13.207 51.2226Z" fill="#F6018F" />
                <path d="M91.5161 62.0205H75.799V34.0226H90.8913V37.9666H80.4458V45.8934H90.0713V49.8178H80.4458V58.0961H91.5161V62.0205Z" fill="white" />
                <path d="M111.397 42.0276L104.739 52.1412L111.319 62.0204H106.067L102.553 55.8312C102.331 55.4538 102.071 54.9722 101.772 54.3864H101.694C101.642 54.5036 101.368 54.9852 100.874 55.8312L97.3006 62.0204H92.0681L98.8626 52.2192L92.4196 42.0276H97.6911L101.147 48.5292C101.407 49.0108 101.661 49.5054 101.908 50.013H101.967L106.438 42.0276H111.397Z" fill="white" />
                <path d="M118.06 59.0723H117.982V71.2164H113.453V42.0276H117.982V45.5419H118.06C119.609 42.8867 121.874 41.559 124.855 41.559C127.393 41.559 129.371 42.4506 130.79 44.2338C132.209 46.0171 132.918 48.412 132.918 51.4187C132.918 54.7509 132.118 57.4192 130.517 59.4237C128.916 61.4282 126.729 62.4305 123.957 62.4305C121.405 62.4305 119.44 61.3111 118.06 59.0723ZM117.943 51.1845V53.6641C117.943 55.1219 118.405 56.3584 119.329 57.3737C120.266 58.3889 121.451 58.8966 122.883 58.8966C124.562 58.8966 125.876 58.2458 126.827 56.9441C127.79 55.6295 128.271 53.8007 128.271 51.4578C128.271 49.4924 127.822 47.9565 126.924 46.8501C126.039 45.7307 124.835 45.171 123.312 45.171C121.698 45.171 120.397 45.7437 119.407 46.8891C118.431 48.0346 117.943 49.4663 117.943 51.1845Z" fill="white" />
                <path d="M140.831 62.0205H136.282V32.4217H140.831V62.0205Z" fill="white" />
                <path d="M154.308 62.489C151.223 62.489 148.757 61.5584 146.908 59.697C145.073 57.8227 144.155 55.3432 144.155 52.2583C144.155 48.9001 145.112 46.2774 147.025 44.39C148.952 42.5027 151.542 41.559 154.796 41.559C157.92 41.559 160.354 42.4766 162.098 44.3119C163.842 46.1472 164.714 48.6919 164.714 51.9459C164.714 55.1349 163.771 57.6926 161.883 59.619C160.009 61.5323 157.484 62.489 154.308 62.489ZM154.523 45.171C152.752 45.171 151.353 45.7893 150.325 47.0258C149.297 48.2623 148.783 49.9675 148.783 52.1412C148.783 54.2368 149.303 55.8898 150.344 57.1003C151.386 58.2978 152.778 58.8966 154.523 58.8966C156.306 58.8966 157.673 58.3043 158.623 57.1199C159.586 55.9354 160.068 54.2498 160.068 52.0631C160.068 49.8633 159.586 48.1647 158.623 46.9672C157.673 45.7698 156.306 45.171 154.523 45.171Z" fill="white" />
                <path d="M179.636 46.3425C179.09 45.9129 178.302 45.6981 177.274 45.6981C175.933 45.6981 174.814 46.3034 173.916 47.5139C173.017 48.7244 172.568 50.371 172.568 52.4535V62.0205H168.039V42.0276H172.568V46.1472H172.646C173.089 44.7415 173.766 43.6481 174.677 42.8671C175.601 42.0731 176.629 41.6761 177.762 41.6761C178.582 41.6761 179.207 41.7998 179.636 42.0471L179.636 46.3425Z" fill="white" />
                <path d="M198.19 53.254H184.562C184.614 55.1023 185.18 56.5276 186.26 57.5299C187.354 58.5321 188.85 59.0332 190.751 59.0332C192.885 59.0332 194.844 58.3954 196.628 57.1199V60.7709C194.805 61.9163 192.397 62.489 189.404 62.489C186.462 62.489 184.152 61.5844 182.473 59.7752C180.806 57.9529 179.973 55.3952 179.973 52.1021C179.973 48.9913 180.891 46.4596 182.726 44.5072C184.575 42.5417 186.865 41.559 189.599 41.559C192.332 41.559 194.447 42.4376 195.944 44.1948C197.441 45.952 198.19 48.3925 198.19 51.5164V53.254ZM193.816 50.0521C193.803 48.425 193.419 47.1625 192.664 46.2643C191.909 45.3532 190.868 44.8977 189.54 44.8977C188.239 44.8977 187.132 45.3728 186.221 46.3229C185.323 47.2731 184.77 48.5162 184.562 50.0521H193.816Z" fill="white" />
                <path d="M212.799 46.3425C212.252 45.9129 211.465 45.6981 210.437 45.6981C209.096 45.6981 207.977 46.3034 207.078 47.5139C206.18 48.7244 205.731 50.371 205.731 52.4535V62.0205H201.202V42.0276H205.731V46.1472H205.809C206.252 44.7415 206.929 43.6481 207.84 42.8671C208.764 42.0731 209.792 41.6761 210.925 41.6761C211.745 41.6761 212.369 41.7998 212.799 42.0471L212.799 46.3425Z" fill="white" />
            </svg>
        </>
    )
})

export default LayerswapLogo;
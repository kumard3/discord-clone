/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Nav from "./Nav";

import download1 from "../download1.svg";
import download2 from "../download2.svg";
export default function Hero() {
  return (
    <div className="bg-[#404EED] h-[40rem] flex flex-col justify-center items-center overflow-hidden ">
      <Nav />
    
      <div class="flex w-full relative top-11 justify-center items-center text-center max-w-3xl text-white font-bold">
        <div class="flex flex-col ">
          <div class="flex flex-col">
            <h1 class="text-6xl font-bold">Imagine a place...</h1>
            <div class="text-xl my-10">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </div>
          </div>
          <div class="flex items-center justify-center  ">
            <div class="flex bg-black px-3 py-4 rounded-3xl mx-2">
              <button class="flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="icon-2tQ9Jt"
                >
                  <g fill="currentColor">
                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                    <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                  </g>
                </svg>
                Download for Linux
              </button>
            </div>
            <button class="flex bg-black/30 px-3 py-4 rounded-3xl ">
              Open Discord in your browser
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full top-[-280px]">
        {/* <img src={download}  /> */}
        <div className="absolute hidden sm:block ">
          <svg
            width="2560"
            height="626"
            viewBox="0 0 2560 626"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M2560 742.024C2281.4 521.424 2152.7 442.024 1922 582.924C1660.1 414.924 1561.1 471.424 1280 646.624C1139.5 509.324 1085.6 452.324 1020.5 538.224C860.2 351.524 772.1 290.424 637.8 453.024C623.243 470.609 603.935 483.636 582.18 490.551C560.424 497.466 537.138 497.977 515.1 492.024C312.9 437.124 118.6 667.024 0 742.024H2560Z"
                fill="#5865F2"
              />
              <path
                d="M2366.4 595.424C2362.4 591.924 2356.2 590.124 2348.8 590.124C2342.52 590.221 2336.29 591.232 2330.3 593.124L2326.3 594.424C2326.42 591.523 2326.08 588.621 2325.3 585.824C2323.1 577.024 2317.3 569.824 2308.6 564.924C2295.6 557.524 2277.3 556.324 2259.8 561.624C2256.38 562.637 2253.03 563.908 2249.8 565.424C2248.3 560.558 2246.22 555.891 2243.6 551.524C2227.9 525.124 2195.3 509.624 2170.9 517.024C2160.5 520.124 2152.7 527.224 2149 536.824C2144.2 549.224 2146.3 564.524 2154.9 578.924C2167.6 600.424 2192 615.224 2214.4 615.324C2214.6 616.624 2214.8 617.924 2215.1 619.124C2215.75 621.516 2216.65 623.829 2217.8 626.024H2220.1C2218.75 623.713 2217.74 621.221 2217.1 618.624C2216.73 617.179 2216.46 615.708 2216.3 614.224C2216.28 613.977 2216.16 613.747 2215.97 613.581C2215.79 613.415 2215.55 613.323 2215.3 613.324H2214.6C2192.8 613.324 2169 598.824 2156.6 577.924C2148.4 564.024 2146.3 549.324 2150.8 537.524C2154.3 528.524 2161.7 521.924 2171.5 518.924C2195 511.824 2226.6 526.924 2241.9 552.524C2244.6 557.109 2246.72 562.014 2248.2 567.124C2248.32 567.391 2248.53 567.604 2248.8 567.724C2249.06 567.825 2249.34 567.825 2249.6 567.724C2253.08 566.032 2256.69 564.628 2260.4 563.524C2277.4 558.424 2295 559.524 2307.6 566.624C2315.8 571.324 2321.3 578.124 2323.4 586.324C2324.22 589.419 2324.49 592.635 2324.2 595.824C2324.21 596.165 2324.35 596.488 2324.6 596.724C2324.74 596.839 2324.91 596.909 2325.08 596.927C2325.26 596.945 2325.44 596.909 2325.6 596.824L2330.9 595.024C2345.5 590.624 2358.6 591.324 2365.1 596.924C2368.6 599.824 2370 603.924 2369.3 608.724C2368.6 613.524 2365.3 620.324 2360.2 626.024H2362.8C2367.5 620.424 2370.6 614.524 2371.3 609.024C2372 603.524 2370.4 598.724 2366.4 595.424Z"
                fill="#808AFF"
              />
              <path
                d="M41.9008 350.3C129.201 306.3 190.901 340.4 190.901 340.4C234.101 327 272.101 336.4 291.801 351.7C304.001 361.3 276.601 359.6 215.101 359.6H44.2008C42.9012 359.6 41.6549 359.084 40.736 358.165C39.817 357.246 39.3008 356 39.3008 354.7C39.3088 353.803 39.5533 352.923 40.0099 352.151C40.4664 351.378 41.1186 350.74 41.9008 350.3Z"
                fill="#5865F2"
              />
              <path
                d="M815.501 192.3C837.601 181.1 853.201 189.8 853.201 189.8C864.101 186.4 873.801 188.8 878.701 192.6C881.801 195.1 874.901 194.6 859.301 194.6H816.001C815.683 194.6 815.377 194.474 815.152 194.249C814.927 194.024 814.801 193.718 814.801 193.4C814.799 193.169 814.864 192.942 814.988 192.747C815.113 192.552 815.29 192.396 815.501 192.3Z"
                fill="#5865F2"
              />
              <path
                d="M2422.1 212.5C2421.96 203.818 2418.81 195.454 2413.19 188.835C2407.57 182.216 2399.83 177.753 2391.28 176.207C2382.74 174.661 2373.92 176.128 2366.34 180.358C2358.76 184.587 2352.87 191.318 2349.7 199.4C2346.91 198.794 2344.06 198.492 2341.2 198.5C2335.46 198.482 2329.79 199.728 2324.59 202.147C2319.39 204.567 2314.78 208.101 2311.1 212.5H2422.1Z"
                fill="#5865F2"
              />
              <path
                d="M413.001 210.1C407.002 210.103 401.094 211.56 395.782 214.346C390.47 217.133 385.912 221.166 382.501 226.1C369.152 220.019 354.339 217.898 339.82 219.99C325.302 222.082 311.69 228.298 300.601 237.9H448.901C446.825 229.953 442.178 222.916 435.684 217.888C429.19 212.859 421.214 210.121 413.001 210.1Z"
                fill="#5865F2"
              />
              <path
                d="M2165.6 283.5C2168.11 283.527 2170.6 282.998 2172.88 281.951C2175.16 280.903 2177.18 279.363 2178.8 277.441C2180.41 275.52 2181.58 273.264 2182.22 270.836C2182.86 268.408 2182.96 265.869 2182.5 263.4C2177.71 237.556 2164.63 213.974 2145.26 196.214C2125.88 178.454 2101.25 167.481 2075.09 164.952C2048.92 162.422 2022.65 168.474 2000.23 182.193C1977.81 195.912 1960.46 216.553 1950.8 241C1941.86 239.071 1932.74 238.098 1923.6 238.1C1906.03 238.071 1888.64 241.712 1872.56 248.789C1856.48 255.866 1842.05 266.224 1830.2 279.2C1829.88 279.573 1829.67 280.029 1829.6 280.516C1829.52 281.003 1829.59 281.501 1829.79 281.952C1829.99 282.402 1830.31 282.787 1830.72 283.061C1831.13 283.335 1831.61 283.487 1832.1 283.5H2165.6Z"
                fill="#5865F2"
              />
              <path
                d="M1720.6 625.4H1718.6C1719.4 602.8 1715.2 588.1 1705.7 580.6C1696.2 573.1 1680.3 572.6 1658 579.5C1657.73 579.569 1657.44 579.533 1657.2 579.4C1656.95 579.237 1656.77 578.987 1656.7 578.7C1656.08 574.68 1654.43 570.889 1651.9 567.698C1649.38 564.508 1646.07 562.028 1642.3 560.5C1632.7 556.6 1620.8 558.8 1610.6 566.3C1585.8 584.4 1588.5 616.8 1588.5 617.1C1588.5 617.306 1588.45 617.509 1588.34 617.686C1588.24 617.863 1588.08 618.006 1587.9 618.1C1587.72 618.196 1587.52 618.228 1587.32 618.192C1587.12 618.155 1586.93 618.053 1586.8 617.9C1573.9 606.4 1564.9 601.9 1557.6 603.2C1550.3 604.5 1543.7 612.3 1536.2 625.4H1533.9C1542 611.2 1548.6 602.7 1557.2 601.2C1565.8 599.7 1573.9 604.1 1586.4 614.9C1586.3 606.9 1587.7 580.6 1609.4 564.7C1620.2 556.8 1632.8 554.5 1643 558.7C1646.93 560.233 1650.41 562.731 1653.12 565.965C1655.83 569.198 1657.68 573.062 1658.5 577.2C1680.9 570.5 1696.7 571.1 1706.9 579.1C1717.1 587.1 1721.4 602.1 1720.6 625.4Z"
                fill="#808AFF"
              />
              <path
                d="M596.5 275.9C594.931 274.918 593.599 273.602 592.596 272.047C591.594 270.491 590.946 268.734 590.7 266.9L589.7 260.5C589.676 260.359 589.602 260.231 589.492 260.139C589.382 260.047 589.243 259.998 589.1 260C588.956 259.998 588.817 260.047 588.707 260.139C588.597 260.231 588.523 260.359 588.5 260.5L587.5 266.9C587.234 268.728 586.578 270.478 585.577 272.03C584.577 273.583 583.254 274.903 581.7 275.9L580.9 276.4C580.804 276.442 580.723 276.512 580.669 276.602C580.615 276.692 580.591 276.796 580.6 276.9C580.591 277.004 580.615 277.109 580.669 277.198C580.723 277.288 580.804 277.359 580.9 277.4L581.7 277.9C583.249 278.928 584.565 280.268 585.564 281.836C586.563 283.403 587.222 285.162 587.5 287L588.5 293.3C588.523 293.441 588.597 293.569 588.707 293.661C588.817 293.753 588.956 293.802 589.1 293.8C589.243 293.802 589.382 293.753 589.492 293.661C589.602 293.569 589.676 293.441 589.7 293.3L590.7 287C590.958 285.157 591.61 283.39 592.611 281.82C593.611 280.25 594.938 278.913 596.5 277.9L597.3 277.4C597.396 277.359 597.476 277.288 597.53 277.198C597.584 277.109 597.608 277.004 597.6 276.9C597.608 276.796 597.584 276.692 597.53 276.602C597.476 276.512 597.396 276.442 597.3 276.4L596.5 275.9Z"
                fill="#91FFAD"
              />
              <path
                d="M1692.1 177.1C1689.45 175.385 1687.2 173.124 1685.49 170.468C1683.78 167.813 1682.66 164.823 1682.2 161.7L1680.6 150.9C1680.54 150.653 1680.4 150.432 1680.2 150.27C1680 150.108 1679.75 150.013 1679.5 150C1679.24 149.996 1678.99 150.084 1678.78 150.249C1678.58 150.413 1678.45 150.644 1678.4 150.9L1676.8 161.7C1676.32 164.83 1675.18 167.822 1673.46 170.477C1671.73 173.132 1669.46 175.39 1666.8 177.1L1665.4 178C1665.25 178.104 1665.13 178.238 1665.05 178.394C1664.96 178.549 1664.91 178.722 1664.9 178.9C1664.9 179.08 1664.95 179.255 1665.04 179.412C1665.12 179.569 1665.25 179.702 1665.4 179.8L1666.8 180.7C1669.47 182.431 1671.74 184.707 1673.46 187.378C1675.18 190.05 1676.32 193.057 1676.8 196.2L1678.4 207C1678.45 207.256 1678.58 207.487 1678.78 207.652C1678.99 207.816 1679.24 207.904 1679.5 207.9C1679.75 207.887 1680 207.792 1680.2 207.631C1680.4 207.469 1680.54 207.248 1680.6 207L1682.2 196.2C1682.66 193.063 1683.78 190.059 1685.49 187.387C1687.19 184.715 1689.45 182.436 1692.1 180.7L1693.6 179.8C1693.74 179.697 1693.85 179.561 1693.92 179.403C1693.99 179.245 1694.02 179.072 1694 178.9C1694.01 178.729 1693.98 178.559 1693.91 178.403C1693.84 178.247 1693.73 178.109 1693.6 178L1692.1 177.1Z"
                fill="#3F99F2"
              />
              <path
                d="M2183.7 410.1C2181.55 408.705 2179.73 406.868 2178.35 404.713C2176.97 402.557 2176.07 400.133 2175.7 397.6L2174.3 388.9C2174.3 388.688 2174.22 388.484 2174.07 388.334C2173.92 388.184 2173.71 388.1 2173.5 388.1C2173.28 388.099 2173.06 388.18 2172.9 388.327C2172.73 388.475 2172.62 388.679 2172.6 388.9L2171.3 397.6C2170.91 400.139 2169.99 402.567 2168.6 404.722C2167.2 406.877 2165.36 408.71 2163.2 410.1L2162.1 410.8C2161.99 410.883 2161.89 410.988 2161.83 411.108C2161.76 411.229 2161.71 411.362 2161.7 411.5C2161.7 411.642 2161.73 411.781 2161.81 411.904C2161.88 412.027 2161.98 412.129 2162.1 412.2L2163.2 412.9C2165.35 414.299 2167.18 416.135 2168.58 418.289C2169.97 420.442 2170.9 422.865 2171.3 425.4L2172.6 434.1C2172.62 434.321 2172.73 434.525 2172.9 434.673C2173.06 434.821 2173.28 434.902 2173.5 434.9C2173.71 434.9 2173.92 434.816 2174.07 434.666C2174.22 434.516 2174.3 434.312 2174.3 434.1L2175.7 425.4C2176.08 422.872 2176.99 420.451 2178.37 418.298C2179.75 416.144 2181.56 414.305 2183.7 412.9L2184.8 412.2C2184.93 412.139 2185.04 412.039 2185.11 411.913C2185.18 411.788 2185.21 411.644 2185.2 411.5C2185.2 411.358 2185.16 411.219 2185.09 411.096C2185.02 410.973 2184.92 410.871 2184.8 410.8L2183.7 410.1Z"
                fill="#404EED"
              />
              <path
                d="M900.9 413.7C900.087 413.183 899.397 412.494 898.879 411.682C898.361 410.871 898.026 409.955 897.9 409L897.4 405.8C897.4 405.721 897.368 405.644 897.312 405.588C897.256 405.532 897.179 405.5 897.1 405.5C897.02 405.5 896.944 405.532 896.888 405.588C896.831 405.644 896.8 405.721 896.8 405.8L896.3 409C896.173 409.955 895.839 410.871 895.32 411.682C894.802 412.494 894.112 413.183 893.3 413.7L892.8 414C892.7 414 892.7 414.2 892.7 414.3C892.695 414.354 892.702 414.409 892.719 414.46C892.736 414.512 892.763 414.56 892.8 414.6L893.3 414.8C894.091 415.341 894.765 416.036 895.28 416.843C895.796 417.651 896.143 418.555 896.3 419.5L896.8 422.8C896.8 422.88 896.831 422.956 896.888 423.012C896.944 423.068 897.02 423.1 897.1 423.1C897.179 423.1 897.256 423.068 897.312 423.012C897.368 422.956 897.4 422.88 897.4 422.8L897.9 419.5C898.057 418.555 898.403 417.651 898.919 416.843C899.435 416.036 900.108 415.341 900.9 414.8L901.4 414.6C901.436 414.56 901.463 414.512 901.481 414.46C901.498 414.409 901.504 414.354 901.5 414.3C901.5 414.2 901.5 414 901.4 414L900.9 413.7Z"
                fill="#FF78B9"
              />
              <path
                d="M943.1 542C942.685 541.753 942.328 541.419 942.052 541.023C941.776 540.626 941.588 540.175 941.5 539.7L941.3 538H941L940.7 539.7C940.629 540.169 940.459 540.617 940.2 541.014C939.941 541.411 939.6 541.747 939.2 542L939 542.2C938.973 542.2 938.948 542.211 938.929 542.23C938.91 542.248 938.9 542.274 938.9 542.3C938.9 542.327 938.91 542.352 938.929 542.371C938.948 542.39 938.973 542.4 939 542.4L939.2 542.6C939.6 542.853 939.941 543.19 940.2 543.587C940.459 543.984 940.629 544.432 940.7 544.9L941 546.6H941.3L941.5 544.9C941.588 544.425 941.776 543.974 942.052 543.578C942.328 543.181 942.685 542.848 943.1 542.6L943.3 542.4L943.1 542Z"
                fill="#FFC619"
              />
              <path
                d="M1365.8 532.6C1364.9 531.993 1364.14 531.21 1363.56 530.299C1362.97 529.388 1362.58 528.368 1362.4 527.3L1361.9 523.7C1361.9 523.5 1361.7 523.4 1361.5 523.4C1361.46 523.4 1361.42 523.408 1361.38 523.423C1361.35 523.438 1361.32 523.46 1361.29 523.488C1361.26 523.516 1361.24 523.549 1361.22 523.585C1361.21 523.622 1361.2 523.661 1361.2 523.7L1360.6 527.3C1360.46 528.369 1360.1 529.395 1359.53 530.31C1358.96 531.224 1358.2 532.006 1357.3 532.6L1356.8 532.9C1356.7 532.9 1356.6 533 1356.6 533.2C1356.6 533.3 1356.7 533.4 1356.8 533.5L1357.3 533.8C1358.18 534.389 1358.93 535.155 1359.5 536.051C1360.07 536.946 1360.44 537.951 1360.6 539L1361.2 542.6C1361.2 542.68 1361.23 542.756 1361.29 542.812C1361.34 542.869 1361.42 542.9 1361.5 542.9C1361.7 542.9 1361.9 542.8 1361.9 542.6L1362.4 539C1362.59 537.95 1362.99 536.95 1363.57 536.057C1364.16 535.164 1364.91 534.396 1365.8 533.8L1366.3 533.5C1366.34 533.46 1366.36 533.412 1366.38 533.36C1366.4 533.309 1366.4 533.254 1366.4 533.2C1366.4 533 1366.4 532.9 1366.3 532.9L1365.8 532.6Z"
                fill="#91FFAD"
              />
              <path
                d="M330.1 509C329.138 508.35 328.322 507.508 327.703 506.527C327.083 505.546 326.673 504.447 326.5 503.3L325.9 499.3C325.8 499.1 325.7 498.9 325.5 498.9C325.394 498.9 325.292 498.942 325.217 499.017C325.142 499.092 325.1 499.194 325.1 499.3L324.5 503.3C324.308 504.454 323.881 505.555 323.244 506.536C322.607 507.517 321.775 508.356 320.8 509L320.2 509.3C320.1 509.4 320.1 509.5 320.1 509.7C320.1 509.8 320.1 510 320.2 510L320.8 510.4C321.784 511.035 322.622 511.872 323.26 512.854C323.897 513.837 324.32 514.943 324.5 516.1L325.1 520.1C325.1 520.3 325.3 520.4 325.5 520.4C325.7 520.4 325.8 520.3 325.9 520.1L326.5 516.1C326.661 514.949 327.066 513.846 327.687 512.863C328.307 511.88 329.13 511.041 330.1 510.4L330.7 510C330.8 510 330.9 509.8 330.9 509.7C330.9 509.623 330.882 509.546 330.847 509.477C330.812 509.407 330.762 509.347 330.7 509.3L330.1 509Z"
                fill="#FF78B9"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="2560" height="626" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <img
          src={download1}
          className="absolute mt-[190px] left-0 ml-[-200px] hidden lg:block"
        />
        <img
          src={download2}
          className=" absolute mr-[-100px] mt-[190px] right-0 "
        />
      </div>
    </div>
  );
}

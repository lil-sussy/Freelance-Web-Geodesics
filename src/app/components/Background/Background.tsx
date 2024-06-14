import React, { useEffect } from "react";
import type { PotatoShape as PotatoShapeType } from "./PotatoShape";
import styles from "./Background.module.scss";
import dynamic from "next/dynamic";
const PotatoShape = dynamic(() => import("./PotatoShape"), { ssr: false });

const Background = ({ advancement }: { advancement: number }) => {
	const potato1: PotatoShapeType[] = [
		{
			index: 0,
			color: "#6790F9",
			top: "5rem",
			right: "5rem",
			startPath:
				"M89.5703 253.252C-27.7027 189.813 -4.78294 120.906 20.0469 58.9258C49.4606 19.1856 134.264 -7.06486 222.123 1.68529C309.982 10.4354 428.783 16.2689 583.11 17.7272C737.437 19.1856 774.109 13.3522 866.934 26.4774C959.759 39.6026 1030.43 73.874 1084.29 120.906C1138.15 167.938 1133.57 290.076 1099.57 487.318C1065.57 684.561 944.097 618.571 812.69 590.497C681.283 562.424 717.191 542.007 602.974 431.536C488.757 321.066 206.843 316.691 89.5703 253.252Z",
			endPath:
				"M58.4989 379C-58.7741 315.561 33.6703 124.98 58.5001 63C87.9139 23.2598 225.639 42.7499 313.499 51.5C401.358 60.2502 517.672 -0.458362 671.999 0.999996C826.326 2.45835 863.108 29.3521 955.933 42.4774C1048.76 55.6026 1127.64 161.968 1181.5 209C1235.36 256.032 1141.5 339.257 1107.5 536.5C1073.5 733.743 1026.41 743.073 894.999 715C763.592 686.927 768.216 646.971 653.999 536.5C539.782 426.029 175.772 442.439 58.4989 379Z",
		},
		{
			index: 0,
			color: "#6790F9",
			bottom: "0rem",
			left: "0rem",
			startPath:
				"M42.3636 121.721C118.651 32.0592 180.214 -28.6467 99.1727 60.1919C162.311 -8.12253 220.712 -1.73047 290.364 2.2214C360.864 6.2214 413.864 111.221 506.364 133.721C598.864 156.221 698.364 141.721 742.864 145.721C787.364 149.721 890.364 305.221 952.864 371.721C1015.36 438.221 912.364 511.221 833.864 553.721C755.364 596.221 490.364 492.721 395.364 371.721C300.364 250.721 149.364 400.221 76.3635 353.721C3.36355 307.221 -34.6364 212.221 42.3636 121.721Z",
			endPath:
				"M105.003 12.4541C104.836 12.6339 104.669 12.8159 104.5 13C104.667 12.8157 104.834 12.6337 105.003 12.4541C114.932 1.75314 122.474 -1.33262 127.927 1.69087C216.179 -6.91215 432.627 221.884 496.364 225.5C566.864 229.5 558 452.5 650.5 475C743 497.5 826 610.5 870.5 614.5C915 618.5 1192 700 1254.5 766.5C1317 833 1179 860.222 1100.5 902.722C1022 945.222 764 799.5 669 678.5C574 557.5 208.5 824.5 135.5 778C62.5 731.5 -50.9995 553.5 26.0005 463C93.726 383.401 168.414 24.1404 127.927 1.69087C118.816 2.57899 111.072 5.9971 105.003 12.4541Z",
		},
		{
			index: 1,
			color: "#A85DCC",
			top: "5rem",
			left: "-1rem",
			startPath:
				"M-117.117 835.357C-184.645 785.107 -158.572 757.428 -179.952 696.703C-173.172 652.999 -178.908 677.942 -166.393 654.916C-153.878 631.89 -87.1315 537.732 -29.2495 454.248C28.6326 370.763 109.72 265.174 230.437 127.782C351.155 -9.61037 334.99 21.5236 396.782 2.29138C458.575 -16.9408 498.205 94.4834 527.405 181.332C556.606 268.18 397.822 394.115 358.191 494.88C318.56 595.644 145.696 858.948 60.4379 876.728C-24.8201 894.507 -49.5891 885.606 -117.117 835.357Z",
			endPath:
				"M-117.117 807.356C-184.645 757.107 -158.572 729.427 -179.951 668.703C-173.172 624.999 -178.908 649.941 -166.393 626.916C-153.878 603.89 -87.1308 509.732 -29.2488 426.247C28.6332 342.763 -55.7169 192.392 65.0008 54.9999C185.719 -82.3923 299.709 85.732 361.502 66.4998C423.294 47.2675 612.3 39.1511 641.501 126C670.701 212.848 202.632 435.735 163.001 536.5C123.369 637.264 298.259 942.72 213.001 960.5C127.743 978.279 -49.5885 857.605 -117.117 807.356Z",
		},
		{
			index: 1,
			color: "#A85DCC",
			top: "2rem",
			right: "-25rem",
			startPath: "M0.999968 276C-4.50003 152 42 155.5 82.5 73.9999C129 40.4999 101 57.5 132.5 50C164 42.5 305 29.5 429 16.5C553 3.49995 716 -4.00005 940 3.49995C1164 11 1122 21.9999 1188.5 73.9999C1255 126 1181 276 1122 391C1063 506 820 444.5 694 494.5C568 544.5 184.5 596.5 101 516.5C17.5 436.5 6.49997 400 0.999968 276Z",
			endPath: "M0.499413 272.5C-5.00059 148.5 182.5 156 223 74.5C269.5 40.9999 355.5 61 387 53.5C418.5 46 556.5 -65.5 680.5 -78.5C804.5 -91.5 968 32.9999 1192 40.4999C1416 47.9999 1374 58.9999 1440.5 111C1507 163 1433 313 1374 428C1315 543 1286.5 831.5 1160.5 881.5C1034.5 931.5 917 488 833.5 408C750 328 5.99941 396.5 0.499413 272.5Z",
		},
		{
			index: 1,
			color: "#D2E756",
			bottom: "-5rem",
			right: "0rem",
			startPath:
				"M18.5188 205.907C-24.4239 140.694 18.5188 115.479 35.2439 59.3961C111.185 -28.4233 250.862 5.48715 404.1 11.1389C557.338 16.7907 492.246 42.0061 617.006 103.741C741.766 165.475 767.079 144.172 947.891 156.78C1128.7 169.388 1104.74 200.255 1184.75 248.078C1264.76 295.9 1275.16 335.028 1243.07 478.06C1210.97 621.093 1170.29 537.621 1068.13 548.925C965.972 560.228 836.24 525.013 732.725 428.934C629.21 332.854 668.085 378.503 458.795 349.809C249.506 321.116 61.4616 271.119 18.5188 205.907Z",
			endPath:
				"M54.5001 387.5C11.5574 322.287 -10.7249 79.5827 6.00017 23.5C81.9408 -64.3195 242.762 130.848 396 136.5C549.238 142.152 559.74 139.265 684.5 201C809.26 262.734 846.689 259.392 1027.5 272C1208.31 284.608 1241.99 282.177 1322 330C1402.01 377.822 1296.85 384.967 1264.75 528C1232.66 671.033 1213.16 914.197 1111 925.5C1008.84 936.804 916.515 682.08 813 586C709.486 489.92 748.085 400.503 538.796 371.809C329.506 343.116 97.4429 452.712 54.5001 387.5Z",
		},
		{
			index: 1,
			color: "#6AFF9D",
			bottom: "-10rem",
			left: "10rem",
			startPath: "M43.5 269C-25.5 102 -10 149.5 81.5 20C134 -47.9069 188.5 83 226 146C263.5 209 235.5 294 364.5 398C493.5 502 541 442 638.5 442C736 442 755 398 878 325.5C1001 253 1022.5 329 1026 442C1029.5 555 802 631 670 665.5C538 700 349 665.5 264 631C179 596.5 112.5 436 43.5 269Z",
			endPath: "M55.4995 479.5C-13.5005 312.5 -26.0004 172.5 65.4996 43C118 -24.9069 190.5 -3.99995 228 59C265.5 122 286 -72.4999 415 31.5001C544 135.5 317.5 400.5 415 400.5C512.5 400.5 648 415 771 342.5C894 270 959 392.5 962.5 505.5C966 618.5 927 627 795 661.5C663 696 140.5 799 55.4999 764.5C-29.5001 730 124.5 646.5 55.4995 479.5Z",
		},
		{
			index: 8,
			color: "#A85DCC",
			top: "5rem",
			left: "-1rem",
			startPath:
				"M-117.117 835.357C-184.645 785.107 -158.572 757.428 -179.952 696.703C-173.172 652.999 -178.908 677.942 -166.393 654.916C-153.878 631.89 -87.1315 537.732 -29.2495 454.248C28.6326 370.763 109.72 265.174 230.437 127.782C351.155 -9.61037 334.99 21.5236 396.782 2.29138C458.575 -16.9408 498.205 94.4834 527.405 181.332C556.606 268.18 397.822 394.115 358.191 494.88C318.56 595.644 145.696 858.948 60.4379 876.728C-24.8201 894.507 -49.5891 885.606 -117.117 835.357Z",
			endPath:
				"M-117.117 807.356C-184.645 757.107 -158.572 729.427 -179.951 668.703C-173.172 624.999 -178.908 649.941 -166.393 626.916C-153.878 603.89 -87.1308 509.732 -29.2488 426.247C28.6332 342.763 -55.7169 192.392 65.0008 54.9999C185.719 -82.3923 299.709 85.732 361.502 66.4998C423.294 47.2675 612.3 39.1511 641.501 126C670.701 212.848 202.632 435.735 163.001 536.5C123.369 637.264 298.259 942.72 213.001 960.5C127.743 978.279 -49.5885 857.605 -117.117 807.356Z",
		},
		{
			index: 8,
			color: "#A85DCC",
			top: "2rem",
			right: "-25rem",
			startPath: "M0.999968 276C-4.50003 152 42 155.5 82.5 73.9999C129 40.4999 101 57.5 132.5 50C164 42.5 305 29.5 429 16.5C553 3.49995 716 -4.00005 940 3.49995C1164 11 1122 21.9999 1188.5 73.9999C1255 126 1181 276 1122 391C1063 506 820 444.5 694 494.5C568 544.5 184.5 596.5 101 516.5C17.5 436.5 6.49997 400 0.999968 276Z",
			endPath: "M0.499413 272.5C-5.00059 148.5 182.5 156 223 74.5C269.5 40.9999 355.5 61 387 53.5C418.5 46 556.5 -65.5 680.5 -78.5C804.5 -91.5 968 32.9999 1192 40.4999C1416 47.9999 1374 58.9999 1440.5 111C1507 163 1433 313 1374 428C1315 543 1286.5 831.5 1160.5 881.5C1034.5 931.5 917 488 833.5 408C750 328 5.99941 396.5 0.499413 272.5Z",
		},
		{
			index: 8,
			color: "#D2E756",
			bottom: "-5rem",
			right: "0rem",
			startPath:
				"M18.5188 205.907C-24.4239 140.694 18.5188 115.479 35.2439 59.3961C111.185 -28.4233 250.862 5.48715 404.1 11.1389C557.338 16.7907 492.246 42.0061 617.006 103.741C741.766 165.475 767.079 144.172 947.891 156.78C1128.7 169.388 1104.74 200.255 1184.75 248.078C1264.76 295.9 1275.16 335.028 1243.07 478.06C1210.97 621.093 1170.29 537.621 1068.13 548.925C965.972 560.228 836.24 525.013 732.725 428.934C629.21 332.854 668.085 378.503 458.795 349.809C249.506 321.116 61.4616 271.119 18.5188 205.907Z",
			endPath:
				"M54.5001 387.5C11.5574 322.287 -10.7249 79.5827 6.00017 23.5C81.9408 -64.3195 242.762 130.848 396 136.5C549.238 142.152 559.74 139.265 684.5 201C809.26 262.734 846.689 259.392 1027.5 272C1208.31 284.608 1241.99 282.177 1322 330C1402.01 377.822 1296.85 384.967 1264.75 528C1232.66 671.033 1213.16 914.197 1111 925.5C1008.84 936.804 916.515 682.08 813 586C709.486 489.92 748.085 400.503 538.796 371.809C329.506 343.116 97.4429 452.712 54.5001 387.5Z",
		},
		{
			index: 8,
			color: "#6AFF9D",
			bottom: "-10rem",
			left: "10rem",
			startPath: "M43.5 269C-25.5 102 -10 149.5 81.5 20C134 -47.9069 188.5 83 226 146C263.5 209 235.5 294 364.5 398C493.5 502 541 442 638.5 442C736 442 755 398 878 325.5C1001 253 1022.5 329 1026 442C1029.5 555 802 631 670 665.5C538 700 349 665.5 264 631C179 596.5 112.5 436 43.5 269Z",
			endPath: "M55.4995 479.5C-13.5005 312.5 -26.0004 172.5 65.4996 43C118 -24.9069 190.5 -3.99995 228 59C265.5 122 286 -72.4999 415 31.5001C544 135.5 317.5 400.5 415 400.5C512.5 400.5 648 415 771 342.5C894 270 959 392.5 962.5 505.5C966 618.5 927 627 795 661.5C663 696 140.5 799 55.4999 764.5C-29.5001 730 124.5 646.5 55.4995 479.5Z",
		},
		{
			index: 2,
			color: "#4845C1",
			top: "-5rem",
			left: "10rem",
			startPath:
				"M0.290083 221.5C-8.70992 132 194.047 65.5 283.547 0C385.047 15 328.047 50.5 358.047 98C388.047 145.5 447.547 181.5 471.047 208.5C494.547 235.5 536.547 324.5 519.047 396.5C501.547 468.5 653.047 481 578.547 579.5C504.047 678 498.047 739 578.547 778C659.047 817 889.79 870.5 895.79 927C901.79 983.5 705.29 957.5 586.29 910C467.29 862.5 462.29 904 417.79 844C373.29 784 339.29 671.5 303.29 608.5C267.29 545.5 71.5471 566 74.5471 509.5C77.5471 453 9.29008 311 0.290083 221.5Z",
			endPath: "",
		},
		{
			index: 2,
			color: "#4595C1",
			top: "-12rem",
			right: "-10rem",
			startPath:
				"M300.865 726.889C216.744 758.747 88.9592 718.447 2.52675 648.949C-9.25449 547.025 39.7886 592.895 77.9055 551.623C116.022 510.352 135.396 443.562 155.394 413.874C175.391 384.187 250.488 320.583 324.564 318.852C398.64 317.121 386.544 355.044 500.969 401.512C615.395 447.979 660.829 250.491 677.665 162.64C694.502 74.7888 726.744 23.1855 779.766 2.76664C832.788 -17.6522 879.269 121.044 864.187 248.283C849.105 375.522 931.216 440.483 884.778 498.996C838.34 557.509 726.697 575.518 675.161 626.597C623.625 677.676 604.11 707.234 548.759 718.959C493.408 730.685 384.986 695.032 300.865 726.889Z",
			endPath: "",
		},
		{
			index: 2,
			color: "#6790F9",
			top: "22rem",
			right: "-10rem",
			startPath:
				"M75.2327 253.453C-23.2683 189.964 -4.01733 121.002 16.8379 58.9727C41.5434 19.2008 112.772 -7.07048 186.568 1.68663C260.363 10.4437 360.148 16.2818 489.771 17.7413C619.395 19.2008 650.196 13.3628 728.163 26.4984C806.129 39.6341 865.487 73.9328 910.727 121.002C955.966 168.072 952.116 290.306 923.561 487.706C895.005 685.106 792.975 619.063 682.602 590.967C572.23 562.871 602.39 542.438 506.455 431.88C410.521 321.321 173.734 316.943 75.2327 253.453Z",
			endPath: "",
		},
		{
			index: 2,
			color: "#B636C1",
			bottom: "-12rem",
			left: "-10rem",
			startPath:
				"M930.636 45.9257C1014.42 103.801 1009.91 169.168 1043.04 357.038C1029.98 367.115 970.701 428.62 900.624 482.67C830.547 536.72 811.719 475.469 611.358 539.077C410.998 602.685 368.239 635.664 202.473 646.701C36.7065 657.738 102.557 564.641 27.501 375.636C-47.555 186.631 44.0782 40.1822 181.218 5.12939C318.358 -29.9234 243.212 160.007 423.445 161.177C603.677 162.346 846.848 -11.9495 930.636 45.9257Z",
			endPath: "",
		},
		{
			index: 5,
			color: "#4845C1",
			top: "-5rem",
			left: "10rem",
			startPath:
				"M0.290083 221.5C-8.70992 132 194.047 65.5 283.547 0C385.047 15 328.047 50.5 358.047 98C388.047 145.5 447.547 181.5 471.047 208.5C494.547 235.5 536.547 324.5 519.047 396.5C501.547 468.5 653.047 481 578.547 579.5C504.047 678 498.047 739 578.547 778C659.047 817 889.79 870.5 895.79 927C901.79 983.5 705.29 957.5 586.29 910C467.29 862.5 462.29 904 417.79 844C373.29 784 339.29 671.5 303.29 608.5C267.29 545.5 71.5471 566 74.5471 509.5C77.5471 453 9.29008 311 0.290083 221.5Z",
			endPath: "",
		},
		{
			index: 5,
			color: "#4595C1",
			top: "-12rem",
			right: "-10rem",
			startPath:
				"M300.865 726.889C216.744 758.747 88.9592 718.447 2.52675 648.949C-9.25449 547.025 39.7886 592.895 77.9055 551.623C116.022 510.352 135.396 443.562 155.394 413.874C175.391 384.187 250.488 320.583 324.564 318.852C398.64 317.121 386.544 355.044 500.969 401.512C615.395 447.979 660.829 250.491 677.665 162.64C694.502 74.7888 726.744 23.1855 779.766 2.76664C832.788 -17.6522 879.269 121.044 864.187 248.283C849.105 375.522 931.216 440.483 884.778 498.996C838.34 557.509 726.697 575.518 675.161 626.597C623.625 677.676 604.11 707.234 548.759 718.959C493.408 730.685 384.986 695.032 300.865 726.889Z",
			endPath: "",
		},
		{
			index: 5,
			color: "#6790F9",
			top: "22rem",
			right: "-10rem",
			startPath:
				"M75.2327 253.453C-23.2683 189.964 -4.01733 121.002 16.8379 58.9727C41.5434 19.2008 112.772 -7.07048 186.568 1.68663C260.363 10.4437 360.148 16.2818 489.771 17.7413C619.395 19.2008 650.196 13.3628 728.163 26.4984C806.129 39.6341 865.487 73.9328 910.727 121.002C955.966 168.072 952.116 290.306 923.561 487.706C895.005 685.106 792.975 619.063 682.602 590.967C572.23 562.871 602.39 542.438 506.455 431.88C410.521 321.321 173.734 316.943 75.2327 253.453Z",
			endPath: "",
		},
		{
			index: 5,
			color: "#B636C1",
			bottom: "-12rem",
			left: "-10rem",
			startPath:
				"M930.636 45.9257C1014.42 103.801 1009.91 169.168 1043.04 357.038C1029.98 367.115 970.701 428.62 900.624 482.67C830.547 536.72 811.719 475.469 611.358 539.077C410.998 602.685 368.239 635.664 202.473 646.701C36.7065 657.738 102.557 564.641 27.501 375.636C-47.555 186.631 44.0782 40.1822 181.218 5.12939C318.358 -29.9234 243.212 160.007 423.445 161.177C603.677 162.346 846.848 -11.9495 930.636 45.9257Z",
			endPath: "",
		},
		{
			index: 3,
			color: "#36C187",
			top: "7rem",
			right: "-10rem",
			startPath:
				"M637.83 444.945C641.031 512.24 604.843 536.105 519.35 628.948C508.806 626.123 452.667 619.642 396.112 604.488C339.557 589.334 364.209 554.845 250.328 475.016C136.447 395.188 101.938 385.941 29.59 303.2C-42.7585 220.46 32.6328 217.716 101.894 102.373C171.156 -12.9701 284.954 -23.5732 358.44 34.4728C431.926 92.5188 301.881 129.247 373.618 224.495C445.355 319.743 634.629 377.651 637.83 444.945Z",
			endPath: "",
		},
		{
			index: 3,
			color: "#95C136",
			top: "17rem",
			left: "10rem",
			startPath:
				"M930.636 45.9257C1014.42 103.801 1009.91 169.168 1043.04 357.038C1029.98 367.115 970.701 428.62 900.624 482.67C830.547 536.72 811.719 475.469 611.358 539.077C410.998 602.685 368.239 635.664 202.473 646.701C36.7065 657.738 102.557 564.641 27.501 375.636C-47.555 186.631 44.0782 40.1822 181.218 5.12939C318.358 -29.9234 243.212 160.007 423.445 161.177C603.677 162.346 846.848 -11.9495 930.636 45.9257Z",
			endPath: "",
		},
		{
			index: 3,
			color: "#4595C1",
			bottom: "-10rem",
			right: "-10rem",
			startPath:
				"M300.865 726.889C216.744 758.747 88.9592 718.447 2.52675 648.949C-9.25449 547.025 39.7886 592.895 77.9055 551.623C116.022 510.352 135.396 443.562 155.394 413.874C175.391 384.187 250.488 320.583 324.564 318.852C398.64 317.121 386.544 355.044 500.969 401.512C615.395 447.979 660.829 250.491 677.665 162.64C694.502 74.7888 726.744 23.1855 779.766 2.76664C832.788 -17.6522 879.269 121.044 864.187 248.283C849.105 375.522 931.216 440.483 884.778 498.996C838.34 557.509 726.697 575.518 675.161 626.597C623.625 677.676 604.11 707.234 548.759 718.959C493.408 730.685 384.986 695.032 300.865 726.889Z",
			endPath: "",
		},
		{
			index: 4,
			color: "#95C136",
			bottom: "-10rem",
			right: "-10rem",
			startPath:
				"M694.711 0.421445C796.54 -0.488715 830.474 55.5622 965.72 190.105C960.838 205.866 947.775 290.281 921.589 374.818C895.402 459.355 844.746 420.109 717.531 587.461C590.317 754.813 574.338 806.395 445.147 910.845C315.956 1015.3 316.208 901.264 146.033 789.924C-24.143 678.585 -33.5215 506.085 58.4371 398.477C150.396 290.868 198.287 489.43 346.333 386.633C494.38 283.836 592.882 1.33161 694.711 0.421445Z",
			endPath: "",
		},
		{
			index: 4,
			color: "#36C187",
			bottom: "-10rem",
			left: "20rem",
			startPath:
				"M638.366 444.944C641.567 512.238 605.379 536.103 519.886 628.946C509.342 626.121 453.203 619.64 396.648 604.486C340.093 589.332 364.746 554.843 250.864 475.014C136.983 395.186 102.475 385.939 30.1261 303.198C-42.2224 220.458 33.1689 217.714 102.43 102.371C171.692 -12.9721 285.49 -23.5751 358.976 34.4709C432.462 92.5168 302.417 129.245 374.154 224.493C445.891 319.741 635.166 377.649 638.366 444.944Z",
			endPath: "",
		},
		{
			index: 4,
			color: "#4845C1",
			top: "-20rem",
			right: "-30rem",
			startPath:
				"M332.167 1117.54C255.532 1164.64 107.328 1011.12 9.3742 959.108C-21.3526 861.214 35.4373 897.049 65.1184 849.35C94.7995 801.65 101.275 732.409 115.337 699.492C129.399 666.575 191.205 589.991 263.635 574.369C336.066 558.747 281.302 416.939 402.422 441.074C523.541 465.209 581.06 444.029 581.086 354.579C581.111 265.129 528.721 34.1319 576.96 4.11201C625.2 -25.9079 687.421 162.285 696.521 290.092C705.621 417.898 745.153 404.315 710.539 470.513C675.925 536.71 589.483 616.334 548.465 676.188C507.447 736.043 611.192 903.293 559.031 925.212C506.87 947.131 408.802 1070.44 332.167 1117.54Z",
			endPath: "",
		},
		{
			index: 4,
			color: "#6790F9",
			top: "-5rem",
			left: "-5rem",
			startPath:
				"M75.2327 253.453C-23.2683 189.964 -4.01733 121.002 16.8379 58.9727C41.5434 19.2008 112.772 -7.07048 186.568 1.68663C260.363 10.4437 360.148 16.2818 489.771 17.7413C619.395 19.2008 650.196 13.3628 728.163 26.4984C806.129 39.6341 865.487 73.9328 910.727 121.002C955.966 168.072 952.116 290.306 923.561 487.706C895.005 685.106 792.975 619.063 682.602 590.967C572.23 562.871 602.39 542.438 506.455 431.88C410.521 321.321 173.734 316.943 75.2327 253.453Z",
			endPath: "",
		},
		{
			index: 7,
			color: "#95C136",
			bottom: "-10rem",
			right: "-10rem",
			startPath:
				"M694.711 0.421445C796.54 -0.488715 830.474 55.5622 965.72 190.105C960.838 205.866 947.775 290.281 921.589 374.818C895.402 459.355 844.746 420.109 717.531 587.461C590.317 754.813 574.338 806.395 445.147 910.845C315.956 1015.3 316.208 901.264 146.033 789.924C-24.143 678.585 -33.5215 506.085 58.4371 398.477C150.396 290.868 198.287 489.43 346.333 386.633C494.38 283.836 592.882 1.33161 694.711 0.421445Z",
			endPath: "",
		},
		{
			index: 7,
			color: "#36C187",
			bottom: "-10rem",
			left: "20rem",
			startPath:
				"M638.366 444.944C641.567 512.238 605.379 536.103 519.886 628.946C509.342 626.121 453.203 619.64 396.648 604.486C340.093 589.332 364.746 554.843 250.864 475.014C136.983 395.186 102.475 385.939 30.1261 303.198C-42.2224 220.458 33.1689 217.714 102.43 102.371C171.692 -12.9721 285.49 -23.5751 358.976 34.4709C432.462 92.5168 302.417 129.245 374.154 224.493C445.891 319.741 635.166 377.649 638.366 444.944Z",
			endPath: "",
		},
		{
			index: 7,
			color: "#4845C1",
			top: "-20rem",
			right: "-30rem",
			startPath:
				"M332.167 1117.54C255.532 1164.64 107.328 1011.12 9.3742 959.108C-21.3526 861.214 35.4373 897.049 65.1184 849.35C94.7995 801.65 101.275 732.409 115.337 699.492C129.399 666.575 191.205 589.991 263.635 574.369C336.066 558.747 281.302 416.939 402.422 441.074C523.541 465.209 581.06 444.029 581.086 354.579C581.111 265.129 528.721 34.1319 576.96 4.11201C625.2 -25.9079 687.421 162.285 696.521 290.092C705.621 417.898 745.153 404.315 710.539 470.513C675.925 536.71 589.483 616.334 548.465 676.188C507.447 736.043 611.192 903.293 559.031 925.212C506.87 947.131 408.802 1070.44 332.167 1117.54Z",
			endPath: "",
		},
		{
			index: 7,
			color: "#6790F9",
			top: "-5rem",
			left: "-5rem",
			startPath:
				"M75.2327 253.453C-23.2683 189.964 -4.01733 121.002 16.8379 58.9727C41.5434 19.2008 112.772 -7.07048 186.568 1.68663C260.363 10.4437 360.148 16.2818 489.771 17.7413C619.395 19.2008 650.196 13.3628 728.163 26.4984C806.129 39.6341 865.487 73.9328 910.727 121.002C955.966 168.072 952.116 290.306 923.561 487.706C895.005 685.106 792.975 619.063 682.602 590.967C572.23 562.871 602.39 542.438 506.455 431.88C410.521 321.321 173.734 316.943 75.2327 253.453Z",
			endPath: "",
		},
		{
			index: 6,
			color: "#95C136",
			top: "-5rem",
			right: "-10rem",
			startPath:
				"M58.3781 240.952C-29.3094 163.208 0.215872 97.9802 30.2712 39.8487C60.7435 4.30149 135.141 -10.8199 206.744 9.06952C278.346 28.959 376.078 49.9199 503.969 71.0959C631.859 92.272 663.191 91.1911 738.249 116.043C813.307 140.895 866.751 183.83 904.297 237.238C941.844 290.646 919.43 410.87 861.156 601.622C802.881 792.373 712.095 711.567 607.286 666.996C502.477 622.425 535.396 606.821 457.411 482.947C379.426 359.072 146.066 318.697 58.3781 240.952Z",
			endPath: "",
		},
		{
			index: 6,
			color: "#95C136",
			top: "5rem",
			left: "10rem",
			startPath:
				"M791.174 87.5811C852.349 139.534 840.215 191.235 843.128 343.076C831.125 350.176 774.632 394.952 710.252 433.036C645.873 471.119 638.35 421.05 466.008 457.574C293.667 494.098 254.384 517.336 117.164 514.457C-20.0567 511.578 45.8969 442.123 8.79031 286.43C-28.3163 130.738 65.6407 20.6384 182.508 2.39114C299.375 -15.8561 213.317 130.006 360.813 143.617C508.31 157.227 730 35.6285 791.174 87.5811Z",
			endPath: "",
		},
		{
			index: 6,
			color: "#95C136",
			bottom: "-10rem",
			left: "20rem",
			startPath:
				"M300.866 726.887C216.745 758.745 88.9602 718.445 2.52773 648.947C-9.25351 547.023 39.7895 592.893 77.9065 551.621C116.023 510.35 135.397 443.56 155.395 413.872C175.392 384.185 250.489 320.581 324.565 318.85C398.641 317.119 386.544 355.042 500.97 401.51C615.396 447.977 660.83 250.489 677.666 162.638C694.503 74.7869 726.745 23.1835 779.767 2.76468C832.789 -17.6541 879.27 121.042 864.188 248.281C849.106 375.52 931.217 440.481 884.779 498.994C838.341 557.507 726.698 575.516 675.162 626.595C623.626 677.674 604.111 707.232 548.76 718.957C493.409 730.683 384.987 695.03 300.866 726.887Z",
			endPath: "",
		},
	];


	return (
		<div className={styles.background}>
      <div className={styles.canvas}>
        {potato1.map((potato, index) => (
          <PotatoShape key={index} advancement={advancement} potato={potato} duration={12000} width={1200} height={800}/>
        ))}
      </div>
		</div>
	);
};

export default Background;

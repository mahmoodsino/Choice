import React from "react";

interface Props {
    className:string
}

const CartIcon = ({className}:Props) => {
  return (
    <svg
    className={className}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.25684C0 1.12423 0.0526795 0.997051 0.14645 0.903283C0.24022 0.809514 0.367399 0.756836 0.50001 0.756836H2.00004C2.11157 0.756867 2.21989 0.794187 2.30778 0.862861C2.39566 0.931535 2.45806 1.02762 2.48505 1.13584L2.89006 2.75684H14.5003C14.5742 2.75688 14.6473 2.77333 14.7141 2.80499C14.7809 2.83665 14.8399 2.88274 14.8867 2.93994C14.9336 2.99713 14.9672 3.06401 14.9851 3.13576C15.003 3.2075 15.0048 3.28232 14.9903 3.35484L13.9903 8.35484C13.9684 8.46387 13.9108 8.5625 13.8266 8.63512C13.7424 8.70775 13.6363 8.75022 13.5253 8.75584L4.12808 9.22784L4.41509 10.7568H13.0003C13.1329 10.7568 13.2601 10.8095 13.3538 10.9033C13.4476 10.9971 13.5003 11.1242 13.5003 11.2568C13.5003 11.3894 13.4476 11.5166 13.3538 11.6104C13.2601 11.7042 13.1329 11.7568 13.0003 11.7568H4.00008C3.88351 11.7567 3.77064 11.7159 3.68098 11.6414C3.59133 11.5669 3.53052 11.4634 3.50907 11.3488L2.01004 3.36384L1.61003 1.75684H0.50001C0.367399 1.75684 0.24022 1.70416 0.14645 1.61039C0.0526795 1.51662 0 1.38944 0 1.25684ZM3.10206 3.75684L3.94208 8.23584L13.0863 7.77684L13.8903 3.75684H3.10206ZM5.0001 11.7568C4.46966 11.7568 3.96094 11.9676 3.58586 12.3426C3.21078 12.7177 3.00006 13.2264 3.00006 13.7568C3.00006 14.2873 3.21078 14.796 3.58586 15.171C3.96094 15.5461 4.46966 15.7568 5.0001 15.7568C5.53054 15.7568 6.03926 15.5461 6.41434 15.171C6.78942 14.796 7.00014 14.2873 7.00014 13.7568C7.00014 13.2264 6.78942 12.7177 6.41434 12.3426C6.03926 11.9676 5.53054 11.7568 5.0001 11.7568ZM12.0002 11.7568C11.4698 11.7568 10.9611 11.9676 10.586 12.3426C10.2109 12.7177 10.0002 13.2264 10.0002 13.7568C10.0002 14.2873 10.2109 14.796 10.586 15.171C10.9611 15.5461 11.4698 15.7568 12.0002 15.7568C12.5307 15.7568 13.0394 15.5461 13.4145 15.171C13.7896 14.796 14.0003 14.2873 14.0003 13.7568C14.0003 13.2264 13.7896 12.7177 13.4145 12.3426C13.0394 11.9676 12.5307 11.7568 12.0002 11.7568ZM5.0001 12.7568C4.73488 12.7568 4.48052 12.8622 4.29298 13.0497C4.10544 13.2373 4.00008 13.4916 4.00008 13.7568C4.00008 14.0221 4.10544 14.2764 4.29298 14.4639C4.48052 14.6515 4.73488 14.7568 5.0001 14.7568C5.26532 14.7568 5.51968 14.6515 5.70722 14.4639C5.89476 14.2764 6.00012 14.0221 6.00012 13.7568C6.00012 13.4916 5.89476 13.2373 5.70722 13.0497C5.51968 12.8622 5.26532 12.7568 5.0001 12.7568ZM12.0002 12.7568C11.735 12.7568 11.4807 12.8622 11.2931 13.0497C11.1056 13.2373 11.0002 13.4916 11.0002 13.7568C11.0002 14.0221 11.1056 14.2764 11.2931 14.4639C11.4807 14.6515 11.735 14.7568 12.0002 14.7568C12.2655 14.7568 12.5198 14.6515 12.7074 14.4639C12.8949 14.2764 13.0003 14.0221 13.0003 13.7568C13.0003 13.4916 12.8949 13.2373 12.7074 13.0497C12.5198 12.8622 12.2655 12.7568 12.0002 12.7568Z"
      />
    </svg>
  );
};

export default CartIcon;
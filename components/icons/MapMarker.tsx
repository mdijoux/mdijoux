import React, { ComponentPropsWithoutRef } from "react";

export function MapMarker(props: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            baseProfile="full"
            width="24"
            height="24"
            viewBox="0 0 24.00 24.00"
            enableBackground="new 0 0 24.00 24.00"
            xmlSpace="preserve"
            {...props}
            >
            <path
                fill="#000000"
                fillOpacity="1"
                strokeWidth="0.2"
                strokeLinejoin="round"
                d="M 11.9993,11.4981C 10.6193,11.4981 9.4993,10.3791 9.4993,8.99813C 9.4993,7.61715 10.6193,6.49813 11.9993,6.49813C 13.3803,6.49813 14.4993,7.61715 14.4993,8.99813C 14.4993,10.3791 13.3803,11.4981 11.9993,11.4981 Z M 11.9993,1.99813C 8.13431,1.99813 4.99931,5.1321 4.99931,8.99813C 4.99931,14.2481 11.9993,21.9981 11.9993,21.9981C 11.9993,21.9981 18.9993,14.2481 18.9993,8.99813C 18.9993,5.1321 15.8643,1.99813 11.9993,1.99813 Z "/>
        </svg>
    );
}

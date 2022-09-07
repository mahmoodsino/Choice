import React from "react";

interface Props {
    className:string
}

const CompanyIcon = ({className}:Props) => {
  return (
    <svg
    className={className}
      viewBox="0 0 25 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833374 29.3542C0.833374 29.1608 0.910197 28.9753 1.04694 28.8386C1.18369 28.7018 1.36915 28.625 1.56254 28.625H23.4375C23.6309 28.625 23.8164 28.7018 23.9531 28.8386C24.0899 28.9753 24.1667 29.1608 24.1667 29.3542C24.1667 29.5476 24.0899 29.733 23.9531 29.8698C23.8164 30.0065 23.6309 30.0833 23.4375 30.0833H1.56254C1.36915 30.0833 1.18369 30.0065 1.04694 29.8698C0.910197 29.733 0.833374 29.5476 0.833374 29.3542Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75008 14.0423V28.6257H7.39591V14.0423H3.75008ZM3.02091 12.584C2.82753 12.584 2.64206 12.6608 2.50532 12.7976C2.36857 12.9343 2.29175 13.1198 2.29175 13.3132V29.3548C2.29175 29.5482 2.36857 29.7337 2.50532 29.8704C2.64206 30.0072 2.82753 30.084 3.02091 30.084H8.12508C8.31847 30.084 8.50394 30.0072 8.64068 29.8704C8.77743 29.7337 8.85425 29.5482 8.85425 29.3548V13.3132C8.85425 13.1198 8.77743 12.9343 8.64068 12.7976C8.50394 12.6608 8.31847 12.584 8.12508 12.584H3.02091Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.39587 0.916992L19.0625 5.29199V15.5003H15.4167C15.2233 15.5003 15.0379 15.5771 14.9011 15.7139C14.7644 15.8506 14.6875 16.0361 14.6875 16.2295V28.6253H7.39587V0.916992ZM9.58337 7.47949H11.0417V8.93782H9.58337V7.47949ZM13.9584 7.47949H12.5V8.93782H13.9584V7.47949ZM15.4167 7.47949H16.875V8.93782H15.4167V7.47949ZM11.0417 10.3962H9.58337V11.8545H11.0417V10.3962ZM12.5 10.3962H13.9584V11.8545H12.5V10.3962ZM16.875 10.3962H15.4167V11.8545H16.875V10.3962ZM9.58337 13.3128H11.0417V14.7712H9.58337V13.3128ZM13.9584 13.3128H12.5V14.7712H13.9584V13.3128ZM15.4167 13.3128H16.875V14.7712H15.4167V13.3128ZM11.0417 16.2295H9.58337V17.6878H11.0417V16.2295ZM12.5 16.2295H13.9584V17.6878H12.5V16.2295ZM9.58337 19.1462H11.0417V20.6045H9.58337V19.1462ZM13.9584 19.1462H12.5V20.6045H13.9584V19.1462ZM11.0417 22.0628H9.58337V23.5212H11.0417V22.0628ZM12.5 22.0628H13.9584V23.5212H12.5V22.0628ZM9.58337 24.9795H11.0417V26.4378H9.58337V24.9795ZM13.9584 24.9795H12.5V26.4378H13.9584V24.9795Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1458 16.9583V28.625H21.25V16.9583H16.1458ZM15.4167 15.5C15.2233 15.5 15.0378 15.5768 14.9011 15.7136C14.7643 15.8503 14.6875 16.0358 14.6875 16.2292V29.3542C14.6875 29.5476 14.7643 29.733 14.9011 29.8698C15.0378 30.0065 15.2233 30.0833 15.4167 30.0833H21.9792C22.1726 30.0833 22.358 30.0065 22.4948 29.8698C22.6315 29.733 22.7083 29.5476 22.7083 29.3542V16.2292C22.7083 16.0358 22.6315 15.8503 22.4948 15.7136C22.358 15.5768 22.1726 15.5 21.9792 15.5H15.4167Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7917 19.8753H17.6042V18.417H19.7917V19.8753ZM19.7917 22.792H17.6042V21.3337H19.7917V22.792ZM19.7917 25.7087H17.6042V24.2503H19.7917V25.7087ZM19.7917 28.6253H17.6042V27.167H19.7917V28.6253ZM5.93758 7.47949V13.3128H4.47925V7.47949H5.93758Z"
      />
    </svg>
  );
};

export default CompanyIcon;
import React, { createContext } from 'react';

export const BagDetailsContext = createContext();

const BagDetailsProvider = ({ children }) => {
    const bagDetails = {commitee: 'ועדת ערר לעניני קורונה', discussion: 'השתתפות בהוצאות קבועות', bagNumber: '57441-2141-21'};

    return (
        <BagDetailsContext.Provider value={bagDetails}>
            {children}
        </BagDetailsContext.Provider>
    );
};

export default BagDetailsProvider;

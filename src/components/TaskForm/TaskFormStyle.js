import React from 'react';

export const TaskFormStyle = theme => {
    return ({

        formulary: {
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            margin: '4rem',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',

            '& TextField': {
                marginTop: '2rem',
            },
            '& Button': {
                marginTop: '2rem',
            },


        },

    });
}
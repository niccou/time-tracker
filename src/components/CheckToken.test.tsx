import { useState } from 'react';
import { useCheckToken } from './CheckToken';

test('should navigate to login page when no auth token', () => {
    sessionStorage.removeItem("Auth token");

    useCheckToken()
});

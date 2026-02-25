import {createBrowserRouter} from "react-router-dom";
import CommonLayout from "@/layouts/common.layout";

import Main from "@/pages/main";
import Login from "@/pages/login";
import Join from "@/pages/Join.jsx";

const router = createBrowserRouter([
    {
        element: <CommonLayout />,
        children: [
            // 메인
            { index: true, element: <Main /> },
            // 로그인
            { path: 'login', element: <Login /> },
            // 회원가입
            { path: 'join', element: <Join /> },
        ]
    }
]);

export default router;
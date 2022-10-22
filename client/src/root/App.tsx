// Node Modules
import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// App Pages
import { Frame, Video, NotFound } from "@pages";

const App: FC = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/video" replace={true} />} />
         <Route path="/video" element={<Video />}>
            <Route path=":videoId" element={<Frame />} />
         </Route>
         <Route path="/*" element={<NotFound />} />
      </Routes>
   </BrowserRouter>
);

export default App;

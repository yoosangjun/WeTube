import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

const logger = morgan("dev");

// express에게 주는 정보
app.set("view engine", "pug"); // 뷰 엔진 설정 선언
app.set("views", process.cwd() + "/src/views"); // 뷰파일들이 있는 폴더 설정
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

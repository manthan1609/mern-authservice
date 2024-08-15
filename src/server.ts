import app from "./app";
import { Config } from "./config";

const startServer = () => {
    try {
        const PORT = Config.PORT || 5000;

        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server listening on Port : ${PORT}`);
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
    }
};

startServer();

import { connect } from "@planetscale/database";
import { env } from "~/env";

const config = {
    host: env.DATABASE_HOST,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
};

export default connect(config);

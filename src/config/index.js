const SERVER_HOST = "nlovesye.tpddns.cn";

const API_LISTENING_PORT = 7500;

const DB_URL = `mongodb://admin_dqd_prod:123456@${SERVER_HOST}/dqd_prod`;

const REDIS = {
  host: SERVER_HOST,
  port: 27020,
  password: "123456",
};

const JWT_SECRET =
  "y0zzHZgnPVh1CYttXaeAp9l9UsyB8ZcyHzQsncsyCvtTIq9pAxr0aIOAmNmFo/qA5O37HbFKBQ8pAOe838ac3l5UA5lY30Ckm+VGyZO0KoXBysmwfZt/tVSl8My1N62vKR1F/x0bz+hikRYBOJVf4dGE7nUIApkLeXGPA+gRPP74UyVqA9Y2R5xWK7WvS+Vj3EO897OBJ5g+MqoFHSAiIwejqgWtuNvaGTvIy5goS78+vmY+01qAQIzz0SL0CZiYW60qIa44+w9WfdPCr70UvK3lzwZbumZ2C9Wt40C7ALvMeAnyOQJaAnihrdOhwzrOyH/Jd0V27vN+D3JcRB30ZQ==";

export { API_LISTENING_PORT, DB_URL, REDIS, JWT_SECRET };

import admin from "firebase-admin";
const serviceAccount = {
	type: "service_account",
	project_id: "web-geodesics",
	private_key_id: "1d4b5db8fa71f757dc3ef89ed174af5d437bd322",
	private_key: process.env.FIREBASE_PRIVATE_KEY,
	client_email: "firebase-adminsdk-eyijz@web-geodesics.iam.gserviceaccount.com",
	client_id: "117269118452010032245",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eyijz%40web-geodesics.iam.gserviceaccount.com",
	universe_domain: "googleapis.com",
};


admin.initializeApp({
	credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
	databaseURL: "https://<your-project-id>.firebaseio.com",
});

const db = admin.firestore();

export { admin, db };

interface EmailTemplateProps {
    verificationUrl: string;
    firstName: string;
}

export function EmailTemplate({ firstName, verificationUrl }: EmailTemplateProps) {
    return (
        <div style={container}>
            <div style={card}>
                <h1 style={title}>Bienvenue {firstName} 👋</h1>

                <p style={text}>Merci de t’être inscrit. Pour activer ton compte, clique sur le bouton ci-dessous :</p>

                <a href={verificationUrl} style={button}>
                    Vérifier mon compte
                </a>

                <p style={smallText}>Si le bouton ne fonctionne pas, copie et colle ce lien dans ton navigateur :</p>

                <p style={link}>{verificationUrl}</p>

                <hr style={divider} />

                <p style={footer}>Si tu n’es pas à l’origine de cette demande, tu peux ignorer cet email.</p>
            </div>
        </div>
    );
}

const container: React.CSSProperties = {
    backgroundColor: "#f4f4f5",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
};

const card: React.CSSProperties = {
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};

const title: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "20px",
};

const text: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "25px",
};

const button: React.CSSProperties = {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
};

const smallText: React.CSSProperties = {
    fontSize: "14px",
    marginTop: "30px",
};

const link: React.CSSProperties = {
    wordBreak: "break-all",
    fontSize: "13px",
    color: "#2563eb",
};

const divider: React.CSSProperties = {
    margin: "30px 0",
    border: "none",
    borderTop: "1px solid #e5e7eb",
};

const footer: React.CSSProperties = {
    fontSize: "12px",
    color: "#6b7280",
};

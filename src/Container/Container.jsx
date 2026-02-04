export default function Container({children}) {
    return (
        <div className="container">
            <h1>Pondok Tahfizg Plus Abu Dzar</h1>
            {children}
            <footer>
                <p>copyright &copy; 2023 Pondok Tahfizh Plus Abu Dzar. All rights reserved.</p>
            </footer>
        </div>
    )
} 
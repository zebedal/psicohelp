

const Container = ({ children, padding=0 }) => {


    const styles = {
        maxWidth: '1280px',
        margin: '0 auto',
        height: 'auto',
        position: 'relative',
        padding: `${padding}px 10px`
        
    }


    return (
        <div style={{ ...styles }}>
            {children}
        </div>
    )

}

export default Container
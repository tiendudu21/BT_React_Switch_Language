const footer = ({ currentLanguage }) =>{
    return(
        <>
        <div id="footer">
            <p>{currentLanguage === 'vi' ? 'Bản quyền thuộc Vietpro Academy - 2024' : 'Copyright belongs to Vietpro Academy - 2024'}</p>
        </div>
        </>
    
    );
}
export default footer;
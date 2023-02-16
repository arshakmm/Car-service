import styles from './footer.module.css'

const Footer=()=>{
    return <div className={styles.footerWrraper}>
        <div>
            <div>Contacts</div>
            <div>Address - - Tumanyan 25</div>
            <div>Phone   - - +374-98-66-77-66</div>
        </div>
        <iframe className={styles.barLocation} width="400" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=yerevan,tumanyan%2025&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        

    </div>
}

export default Footer
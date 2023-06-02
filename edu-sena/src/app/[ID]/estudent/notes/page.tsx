import Nav from "@/componets/global/nav";
import styles from '../../../../styles/global/notes.module.css'


export default function notes() {


    return (
        <Nav>
            <table role="grid" className={styles.tableT}>
                <thead className={styles.headT}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                    </tr>
                </thead>
                <tbody className={styles.bodyT} >
                    <tr>
                        <th scope="row">1</th>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
                <tfoot className={styles.footerT}>
                    <tr>
                        <th scope="col">#</th>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                    </tr>
                </tfoot>
            </table>

        </Nav>
    )
}
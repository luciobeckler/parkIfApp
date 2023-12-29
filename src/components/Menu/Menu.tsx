import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
    qrCodeOutline,
    notificationsOutline,
    alertCircleOutline,
    documentAttachOutline,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    title: string;
    url: string;
    iosIcon: string;
    mdIcon: string;
}

const appPages: AppPage[] = [
    {
        title: 'QR Code de acesso',
        url: '/folder/Qrcode',
        iosIcon: qrCodeOutline,
        mdIcon: qrCodeOutline,
    },
    {
        title: 'Notificações',
        url: '/folder/Notificacoes',
        iosIcon: notificationsOutline,
        mdIcon: notificationsOutline,
    },
    {
        title: 'Reportar problema',
        url: '/folder/reportarproblema',
        iosIcon: alertCircleOutline,
        mdIcon: alertCircleOutline,
    },
    {
        title: 'Envio de documentos',
        url: '/folder/EnvioDeDocumentos',
        iosIcon: documentAttachOutline,
        mdIcon: documentAttachOutline,
    },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId='main' type='overlay'>
            <IonContent>
                <IonList id='inbox-list'>
                    <IonListHeader>Menu do Aluno</IonListHeader>
                    <IonNote>Lúcio Beckler Passos</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem
                                    className={
                                        location.pathname === appPage.url
                                            ? 'selected'
                                            : ''
                                    }
                                    routerLink={appPage.url}
                                    routerDirection='none'
                                    lines='none'
                                    detail={false}
                                >
                                    <IonIcon
                                        aria-hidden='true'
                                        slot='start'
                                        ios={appPage.iosIcon}
                                        md={appPage.mdIcon}
                                    />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>

                {/*Ion-list de label desnecessária */}
                {/* <IonList id='labels-list'>
                    <IonListHeader>Labels</IonListHeader>
                    {labels.map((label, index) => (
                        <IonItem lines='none' key={index}>
                            <IonIcon
                                aria-hidden='true'
                                slot='start'
                                icon={documentAttachOutline}
                            />
                            <IonLabel>{label}</IonLabel>
                        </IonItem>
                    ))}
                </IonList> */}
            </IonContent>
        </IonMenu>
    );
};

export default Menu;

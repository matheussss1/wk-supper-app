import { useState } from 'react'
import Button from '../Button';
import copyIcon from '../../media/copy-icon.svg';
import coppiedIcon from '../../media/coppied-icon.svg';
import styles from './CopyArea.module.scss';

function ClickToCopy({ url }: { url: string }) {
    const [isCopyed, setCopyed] = useState(false);

    const toggleCoppied = () => {
        navigator.clipboard.writeText(url);
        !isCopyed && setCopyed(!isCopyed);
    };


    return (
        <div className={styles.copyAreaContainer} onClick={toggleCoppied}>
            <span>{url}</span>
            <Button>
                <img src={isCopyed ? coppiedIcon : copyIcon} />
            </Button>
        </div>
    );
}

export default ClickToCopy;
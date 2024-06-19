import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export default function Header() {
    return (
        <div className="container-max-width md-0">
        <header className="d-flex flex-wrap py-3 mb-4">
            <div className="container justify-content-left ps-2 ms-5">
                <h1 className="fs-4 d-flex align-items-left m-3 ps-3"><TipsAndUpdatesIcon /> <p className='px-3'>Keeper</p></h1>
            </div>
        </header>
      </div>
    );
}


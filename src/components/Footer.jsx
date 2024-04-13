import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer container-fluid px-0">
                <div className="country mt-1 py-3 px-4">India</div>
                <div className="foot d-flex justify-content-between px-4 pt-3">
                    <div className='foot-list'>
                        <ul className="list-unstyled d-flex gap-4 ms-2">
                            <li><a href=''>About</a></li>
                            <li><a href=''>Advertising</a></li>
                            <li><a href=''>Business</a></li>
                            <li><a href=''>How Search works</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-unstyled d-flex gap-4">
                            <li><a href=''>Privacy</a></li>
                            <li><a href=''>Terms</a></li>
                            <li><a>Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
import React from 'react';

const PurchaseModal = ({ product, quantity }) => {
    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-sm text-primary">{product?.name}</h3>
                    <form className=' flex justify-center mt-5'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PurchaseModal;
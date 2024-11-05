import React, { useCallback, useContext, useEffect, useState } from "react";
import "../../styles/support/approvalSection.css";

import SemiRoundBtn from "../custom/buttons/SemiRoundBtn.custom";
import TextArea from "antd/es/input/TextArea";
import { useAuth } from "../../Context/AuthContext";
import DayJS from "dayjs";
import { UpdateListingApproval } from "../../api/Support/Listing.api";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ConfirmModal, SuccessModal } from "../../utils/ModalMethod.utils";
import { Modal as AntdModal } from "antd";
import Loading from "../modals/LoadingModal";

const ApprovalSectionComponent = (props) => {
    const { approvals, level, isEditListing, isShowDetails, listingStatus, listingId } = props;

    const { setIsMessageLoadingOpen, setIndex, openMessage } = useOutletContext();
    const { userDetails } = useAuth();

    const navigate = useNavigate();

    const [modal, contextHolder] = AntdModal.useModal();

    const [listingLevel, setLevel] = useState(level);
    const [remarks, setRemarks] = useState(Array(approvals.length - 1).fill(""));
    const [approvalStatus, setApprovalStatus] = useState("");
    const [remarksIndex, setRemarksIndex] = useState(0);
    const [isSpin, setIsSpin] = useState({
        openModal: false,
        loadingLabel: ''
    });

    const [modalOpen, setModalOpen] = useState(false);

    // useEffect(() => {
    //     setLevel(level);
    // }, [level]);

    function fullName(approver) {
        return `${approver.first_name} ${approver.middle_name} ${approver.last_name}`;
    }

    function dateApproved(date) {
        if (!date) {
            return date
        }
        return DayJS('2024-07-16 08:52:37').format('MM/DD/YYYY hh:mm A');
    }

    const ApprovalListItems = () => {
        let listApprovers = [];

        function filterApp(initialArray, newArr) {
            const approverLevel = [1, 2]

            const levelOneAndTwo = initialArray.filter(approval => approverLevel.includes(approval.approver.level));

            newArr.unshift(...levelOneAndTwo);
        }

        if (listingStatus === "PENDING") {

            const filter_approver = approvals.filter(approval => approval.approval_status === "PENDING" && (approval.approver.level === 3 && approval.approver.email === userDetails.email));

            if (filter_approver.length === 0) {
                listApprovers = approvals.slice(0, 3);
            } else {
                filterApp(approvals, filter_approver)
            }

        }
        else if (listingStatus === "DENIED") {
            let filter_approver = [];

            approvals.forEach(app => {
                if (app.approver.level === 3 && app.approval_status === "DENIED") {
                    filter_approver.push(app);
                }
            });
            if (filter_approver.length == 0) {

                const approvalLevel = approvals.slice(0, 3);
                filter_approver.push(...approvalLevel);

            } else {
                filterApp(approvals, filter_approver);
            }

            listApprovers = filter_approver;

            // listApprovers = approvals.filter(approval => approval.approval_status === "DENIED" || "PENDING");
        } else if (listingStatus === "APPROVED") {
            listApprovers = approvals.filter(approval => approval.approval_status === "APPROVED")
        }

        return listApprovers.map((approval, index) => {

            const approver = approval.approver;
            const enableApproval = approval.approval_status === 'PENDING' && listingLevel === approver.level;

            return (
                <div className="support-approval--content-item" key={index}>
                    <div className="support-approval--content-item-header">
                        <h3>Level {index + 1} Approval</h3>
                    </div>
                    <div className="support-approval--content-item-body">
                        <div className="support-approval--item-noted">
                            <p>
                                {
                                    index === 0 ? 'Noted by: ' : 'Approver: '
                                }
                            </p>
                            <p>{fullName(approver)}</p>
                        </div>
                        <div className="support-approval--item-date">
                            <p>Date Approved:</p>
                            <p>{dateApproved(approval.approval_date)}</p>
                        </div>
                    </div>
                    <div className="support-approval--content-item-actions">
                        <div className="support-approval--content-item-input">
                            <TextArea
                                placeholder="Enter Remarks"
                                rows={4}
                                // defaultValue={approval.remarks}
                                readOnly={!enableApproval}
                                name="remarks"
                                value={!enableApproval ? approval.remarks : remarks[index]}
                                onChange={handleRemarksChange(index)}
                                disabled={(isShowDetails && isEditListing) || listingStatus === "APPROVED" || listingStatus === "DENIED"}
                            />
                        </div>
                        {
                            enableApproval ? <div className="support-approval--content-item-buttons">
                                <SemiRoundBtn
                                    type={'primary'}
                                    label={'Approve'}
                                    className={'approve-btn'}
                                    disabled={isShowDetails && isEditListing}
                                    handleClick={() => UpdateApproval("APPROVED", index)} />
                                <SemiRoundBtn
                                    type={'primary'}
                                    label={'Deny'}
                                    className={'denied-btn'}
                                    disabled={isShowDetails && isEditListing}
                                    handleClick={() => UpdateApproval("DENIED", index)} />
                            </div> : null
                        }
                    </div>
                </div>
            )
        });
    }
    const handleRemarksChange = (index) => (e) => {
        const { value } = e.target;
        setRemarks((prevRemarks) => {
            const newRemarks = [...prevRemarks];
            newRemarks[index] = value;
            return newRemarks;
        });
    };

    const handleConfirmApproval = useCallback(async (status) => {
        try {
            console.log("index", remarksIndex);
            console.log("status", approvalStatus);

            setIsSpin({
                openModal: true,
                loadingLabel: 'Updating Listing'
            })

            let approverRemarks = remarks[remarksIndex];

            if (approverRemarks == "") {
                if (remarksIndex == 0) {
                    approverRemarks = status == "APROVED" ? "Noted and Reviewed." : "Denied."
                } else if (remarks[remarksIndex] == "" && [1, 2].includes(remarksIndex)) {
                    approverRemarks = status == "APROVED" ? "Approved." : "Denied"
                }
            }

            const payload = [
                {
                    listing_id: listingId,
                    approver_email: userDetails.email,
                    approval_status: status,
                    remarks: approverRemarks,
                }
            ]
            console.log(payload);

            await UpdateListingApproval(payload);

            setIsSpin({
                openModal: false,
                loadingLabel: ''
            })

            SuccessModal(
                true,
                modal,
                'Success',
                `Listing ${status} Successfully`,
                'Close',
                () => {
                    setModalOpen(false);
                    navigate(
                        {
                            pathname: '/support/master-list/pending',
                        },
                        {
                            replace: true
                        }
                    )
                }
            )

        } catch (error) {
            setIsSpin({
                openModal: false,
                loadingLabel: ''
            })
            try {

                console.log("UpdateApproval", error);
                const err = error.data.data.error;
                openMessage('error', err.message, 3);
                setIsMessageLoadingOpen(false);
                setIndex(100);

            } catch (error) {
                console.log("catch err", error);
                openMessage('error', 'Something went wrong. Please refresh the page and try again.', 3);
                setIsMessageLoadingOpen(false);
                setIndex(100);
            }
        }
    }, [approvalStatus, remarksIndex, remarks, listingId, userDetails, modal, setModalOpen, navigate]);

    const UpdateApproval = useCallback(async (status, index) => {
        console.log("Update Approval", status, index);

        setModalOpen(true);
        setApprovalStatus(status);
        setRemarksIndex(index);

        const okBtn = status == "APPROVED" ? "Approve" : "Deny";

        try {

            ConfirmModal(
                modalOpen,
                modal,
                `Listing Approval`,
                `Are you sure you want to ${status} listing?`,
                okBtn,
                () => {
                    handleConfirmApproval(status)
                },
                () => setModalOpen(false)
            );

        } catch (error) {
            openMessage('error', error, 3);
            setIsMessageLoadingOpen(false);
            setIndex(100);
            console.log("UpdateApproval", error);
        }
    }, [setApprovalStatus, setRemarksIndex, handleConfirmApproval, modalOpen, modal])

    return (
        <>
            {contextHolder}
            <div className="support-approval--wrapper">
                <div className="support-approval--header">
                    <h2>Levels of Approvals</h2>
                </div>
                <div className="support-approval--content">
                    <ApprovalListItems />
                </div>
            </div>
            {
                isSpin.openModal && <Loading
                    isSpin={isSpin.openModal}
                    loadingLabel={isSpin.loadingLabel} />
            }
        </>
    );
};

export default ApprovalSectionComponent;

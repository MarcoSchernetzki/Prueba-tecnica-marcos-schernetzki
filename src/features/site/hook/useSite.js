import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SiteRepository } from "../service/siteRepository";
import * as ac from "../reducer/action.creator";
import Swal from "sweetalert2";

export const useSite = () => {
    const navigate = useNavigate();
    const sites = useSelector((state) => state.sites);
    const dispatcher = useDispatch();
    const apiSite = useMemo(() => new SiteRepository(), []);

    const handleLoad = useCallback(() => {
        apiSite
            .getAll()
            .then((sites) => {
                dispatcher(ac.loadActionSite(sites));
            })

            .catch((error) => {
                return Swal.fire("Error", error.message, "error");
            });
    }, [apiSite, dispatcher]);

    const handleAdd = (newSite) => {
        apiSite
            .post(newSite)
            .then((sites) => {
                return dispatcher(ac.addActionSite(sites));
            })
            .catch((error) => {
                return Swal.fire("Error", error.message, "error");
            });
    };

    const handleSelect = (site) => {
        apiSite
            .get(site._id)
            .then(() => {
                dispatcher(ac.selectActionCreator(site));
                navigate("/details");
            })
            .catch((error) => {
                return Swal.fire("Error", error.message, "error");
            });
    };

    return {
        sites,
        handleLoad,
        handleAdd,
        handleSelect,
    };
};

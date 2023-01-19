import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SiteRepository } from "../service/siteRepository";
import * as ac from "../reducer/action.creator";
import Swal from "sweetalert2";

export const useSite = () => {
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
        apiSite.post(newSite).then((sites) => {
            return dispatcher(ac.addActionSite(sites));
        });
    };

    return {
        sites,
        handleLoad,
        handleAdd,
    };
};

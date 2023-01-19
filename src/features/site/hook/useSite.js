import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SiteRepository } from "../service/siteRepository";
import * as ac from "../reducer/action.creator";

export const useSite = () => {
    const sites = useSelector((state) => state.sites);
    const dispatcher = useDispatch();
    const apiSite = useMemo(() => new SiteRepository(), []);

    const handleLoad = useCallback(() => {
        apiSite
            .getAll()
            .then((sites) => dispatcher(ac.loadActionSite(sites)))

            .catch((error) => console.log(error.name, error.message));
    }, [apiSite, dispatcher]);

    const handleAdd = (newSite) => {
        apiSite.post(newSite).then((sites) => {
            dispatcher(ac.addActionSite(sites));
        });
    };

    return {
        sites,
        handleLoad,
        handleAdd,
    };
};

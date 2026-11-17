import { useMemo } from "react";

function useFilter(items, searchTerm) {
    return useMemo(() => {
        return items.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [items, searchTerm]);
}

export default useFilter;
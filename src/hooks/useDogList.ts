import { useQuery } from "@tanstack/react-query"
import { fetchDogList } from "../api/dog"
import { queryClient } from "../api/queryClient"



export function useDogList(url: string, key: string) {

    return useQuery({
        queryFn: () => fetchDogList(`${url}/dogs`),
        queryKey: [key]
    }, queryClient)

    
}
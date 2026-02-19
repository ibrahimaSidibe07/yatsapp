import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function usePreviousPath() {
  const pathname = usePathname();
  const [previous,setPrevious]=useState<string | null>("")
  const current = useRef(pathname)
  useEffect( () => {
    setPrevious(current.current)
    current.current=pathname

  },[pathname])
  return previous
}

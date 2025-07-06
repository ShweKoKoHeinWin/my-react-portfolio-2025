import {useState } from 'react'
import type { ProjectProp } from '../types';

const useProjectViewer = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [project, setProject] = useState<ProjectProp | undefined>();
    
  return {open, setOpen, project, setProject};
}

export default useProjectViewer;

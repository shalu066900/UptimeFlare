// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'Novel Status',
  links: [],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'novel_render',
      name: 'Novel App',
      method: 'GET',
      target: 'https://novel.lockr.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      responseForbiddenKeyword: 'bad gateway',
    },
  ],
}

// Leave empty if not using scheduled maintenance
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

import Department from '../models/Department'

interface DepartmentRepository{
    AddDepartment():Promise<Department | null>
    DeleteDepartment():Promise<boolean>
    Save():Promise<void>
}

class DepartmentRepositoryDB implements DepartmentRepository {
    AddDepartment(): Promise<Department | null> {
        throw new Error('Method not implemented.')
    }
    DeleteDepartment(): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
    Save(): Promise<void> {
        throw new Error('Method not implemented.')
    }
    
}
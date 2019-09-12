// Type definitions

/**
 * delete folder
 *   - `dir` The folder to be clear
 */
declare function rmdir(dir: string): Promise<void>

export = rmdir
type IModules = {
  [key: string]: string
}

function importModule(url: string) {
  try {
    return import(url).then(r => {
      return r.default
    })
  } catch (e) {
    console.log(`Error importing module from ${url}.`)
  }
}


export default async (app: Object, modules: IModules): Promise<void> => {

  for (const name in modules) {
    const [moduleName, moduleUrl] = [name, modules[name]]

    Object.assign(app, { [moduleName]: await importModule(moduleUrl) })

  }
}
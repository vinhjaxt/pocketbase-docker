onAfterBootstrap((e) => {
    console.log(`[hook] pb started`)
})

routerAdd(`GET`, `/`, r => {
    return r.noContent(404)
})

routerAdd(`GET`, `/hello/:name`, r => {
    const name = r.pathParam("name")
    return r.json(200, { message: `Hello ` + name })
})

import 'app-module-path/register';
import config from 'config/env';
import app from 'config/express';

app.listen(config.port, () => {
	console.log(`server started on port ${config.port} (${config.env})`);
});

export default app;

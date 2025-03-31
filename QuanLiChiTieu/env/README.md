# Environment Configuration

This project uses different environment configuration files for different environments:

## Environment Files

- `.env`: Default environment variables used across all environments
- `.env.development`: Development-specific environment variables
- `.env.production`: Production-specific environment variables
- `.env.example`: Template file with example environment variables

## How to Use

1. Copy `.env.example` to create your own environment file:
   ```
   cp .env.example .env.local
   ```

2. Edit the variables in your `.env.local` file to match your environment

3. To run the application in a specific environment:
   ```
   # Development
   npm run dev
   
   # Production
   npm run start:prod
   ```

4. Environment loading priority:
   - `.env.local` (not tracked in git)
   - `.env.[environment]` (e.g. `.env.development`)
   - `.env` (base file)

## Important Notes

- Never commit `.env`, `.env.development`, or `.env.production` files containing sensitive information
- Always use `.env.example` as a template without real credentials
- For CI/CD pipelines, set the environment variables directly in your pipeline configuration 